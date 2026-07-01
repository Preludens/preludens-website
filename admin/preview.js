(function () {
  var h = window.CMS.h;
  var createClass = window.CMS.createClass;

  function renderField(label, value) {
    if (!value) {
      return null;
    }
    return h(
      "p",
      { style: { margin: "0.25rem 0", color: "#1f2937", fontSize: "14px" } },
      h("strong", null, label + ": "),
      value
    );
  }

  var MarkdownPagePreview = createClass({
    render: function render() {
      return h(
        "main",
        {
          style: {
            maxWidth: "900px",
            margin: "0 auto",
            padding: "24px",
            background: "#fff",
            minHeight: "100vh",
          },
        },
        h(
          "header",
          { style: { borderBottom: "1px solid #e5e7eb", marginBottom: "20px", paddingBottom: "12px" } },
          h("h1", { style: { margin: 0, fontSize: "28px" } }, this.props.entry.getIn(["data", "title"]) || "Untitled"),
          renderField("Beschrijving", this.props.entry.getIn(["data", "description"])),
          renderField("Permalink", this.props.entry.getIn(["data", "permalink"]))
        ),
        h("article", null, this.props.widgetFor("body"))
      );
    },
  });

  var StoryPreview = createClass({
    render: function render() {
      var entry = this.props.entry;
      var highlights = entry.getIn(["data", "highlights"]);
      var highlightsList = null;

      if (highlights && highlights.size > 0) {
        highlightsList = h(
          "ul",
          { style: { margin: "0.5rem 0 0.75rem", paddingLeft: "1.2rem" } },
          highlights.map(function (item, index) {
            return h("li", { key: "highlight-" + index }, item);
          }).toArray()
        );
      }

      return h(
        "main",
        { style: { maxWidth: "900px", margin: "0 auto", padding: "24px", background: "#fff", minHeight: "100vh" } },
        h("h1", { style: { marginTop: 0 } }, entry.getIn(["data", "title"]) || "Nieuwe case"),
        renderField("Taal", entry.getIn(["data", "lang"])),
        renderField("Client", entry.getIn(["data", "client"])),
        renderField("Project", entry.getIn(["data", "project"])),
        renderField("Samenvatting", entry.getIn(["data", "summary"])),
        highlightsList,
        renderField("Vraag", entry.getIn(["data", "vraag"])),
        renderField("Oplossing", entry.getIn(["data", "oplossing"])),
        renderField("Resultaat", entry.getIn(["data", "resultaat"]))
      );
    },
  });

  var BlogPreview = createClass({
    render: function render() {
      var entry = this.props.entry;
      return h(
        "main",
        { style: { maxWidth: "900px", margin: "0 auto", padding: "24px", background: "#fff", minHeight: "100vh" } },
        h("h1", { style: { marginTop: 0 } }, entry.getIn(["data", "title"]) || "Nieuwe post"),
        renderField("Taal", entry.getIn(["data", "lang"])),
        renderField("Datum", entry.getIn(["data", "date"])),
        renderField("Leestijd", entry.getIn(["data", "reading_time"])),
        renderField("Samenvatting", entry.getIn(["data", "summary"])),
        h(
          "article",
          { style: { borderTop: "1px solid #e5e7eb", marginTop: "20px", paddingTop: "12px" } },
          this.props.widgetFor("body")
        )
      );
    },
  });

  window.CMS.registerPreviewTemplate("pages_nl", MarkdownPagePreview);
  window.CMS.registerPreviewTemplate("pages_en", MarkdownPagePreview);
  window.CMS.registerPreviewTemplate("verhalen", StoryPreview);
  window.CMS.registerPreviewTemplate("play_blog", BlogPreview);
})();
