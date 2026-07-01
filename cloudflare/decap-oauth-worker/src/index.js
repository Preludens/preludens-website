function json(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function html(content, status) {
  return new Response(content, {
    status: status || 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function requiredEnv(env, key) {
  if (!env[key]) {
    throw new Error("Missing required secret: " + key);
  }
  return env[key];
}

function cookieHeader(name, value, maxAgeSeconds) {
  return [
    name + "=" + encodeURIComponent(value),
    "Path=/",
    "HttpOnly",
    "Secure",
    "SameSite=Lax",
    "Max-Age=" + String(maxAgeSeconds || 600),
  ].join("; ");
}

export default {
  async fetch(request, env) {
    try {
      var url = new URL(request.url);
      if (url.pathname === "/auth") {
        return handleAuth(request, env, url);
      }
      if (url.pathname === "/callback") {
        return handleCallback(request, env, url);
      }
      return json({ ok: true, service: "decap-oauth-worker" });
    } catch (error) {
      return json({ error: error.message || "Unexpected error" }, 500);
    }
  },
};

function getSiteOrigin(env) {
  return (env.CMS_SITE_ORIGIN || "https://preludens.nl").replace(/\/$/, "");
}

async function handleAuth(_request, env, url) {
  var clientId = requiredEnv(env, "GITHUB_CLIENT_ID");
  var origin = getSiteOrigin(env);
  var state = crypto.randomUUID().replace(/-/g, "");

  var callbackUrl = new URL("/callback", url.origin).toString();
  var authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", callbackUrl);
  authorizeUrl.searchParams.set("scope", "repo user");
  authorizeUrl.searchParams.set("state", state);

  return new Response(null, {
    status: 302,
    headers: {
      Location: authorizeUrl.toString(),
      "set-cookie": cookieHeader("decap_oauth_state", state, 600),
      "access-control-allow-origin": origin,
      "access-control-allow-credentials": "true",
    },
  });
}

async function handleCallback(request, env, url) {
  var clientId = requiredEnv(env, "GITHUB_CLIENT_ID");
  var clientSecret = requiredEnv(env, "GITHUB_CLIENT_SECRET");
  var origin = getSiteOrigin(env);

  var code = url.searchParams.get("code");
  var state = url.searchParams.get("state");

  if (!code || !state) {
    return html("<h1>Missing code or state.</h1>", 400);
  }

  var cookie = request.headers.get("cookie") || "";
  var stateCookie = cookie
    .split(";")
    .map(function (part) {
      return part.trim();
    })
    .find(function (part) {
      return part.startsWith("decap_oauth_state=");
    });

  var cookieState = stateCookie ? decodeURIComponent(stateCookie.split("=")[1]) : "";
  if (!cookieState || cookieState !== state) {
    return html("<h1>OAuth state mismatch.</h1>", 403);
  }

  var tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": "preludens-decap-oauth-worker",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code: code,
    }),
  });

  var tokenJson = await tokenResponse.json();
  if (!tokenResponse.ok || !tokenJson.access_token) {
    return html("<h1>Could not complete GitHub OAuth.</h1><pre>" + JSON.stringify(tokenJson) + "</pre>", 500);
  }

  var resultPage = "<!doctype html><html><body><script>" +
    "if (window.opener) {" +
    "window.opener.postMessage('authorization:github:success:{\"token\":\"" + tokenJson.access_token + "\"}', '" + origin + "');" +
    "window.close();" +
    "} else {" +
    "document.body.innerText = 'Login complete. You can close this window.';" +
    "}" +
    "</script></body></html>";

  var response = html(resultPage);
  response.headers.append("set-cookie", cookieHeader("decap_oauth_state", "", 0));
  response.headers.set("access-control-allow-origin", origin);
  response.headers.set("access-control-allow-credentials", "true");
  return response;
}
