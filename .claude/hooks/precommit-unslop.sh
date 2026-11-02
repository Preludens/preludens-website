#!/bin/bash
# PreToolUse-hook: herinnert aan de unslop-check voor er gecommit wordt.
# Draait alleen bij `git commit`, en alleen als er UI- of tekstbestanden staan.
set -u

input=$(cat)
case "$input" in
  *'git commit'*) ;;
  *) exit 0 ;;
esac

cd "${CLAUDE_PROJECT_DIR:-.}" 2>/dev/null || exit 0
staged=$(git diff --cached --name-only 2>/dev/null | grep -v "^\.claude/") || exit 0
[ -n "$staged" ] || exit 0

ui=$(printf '%s\n' "$staged" | grep -Ec '\.(scss|css)$|^_includes/|^_layouts/|^assets/js/' || true)
copy=$(printf '%s\n' "$staged" | grep -Ec '\.(md|markdown)$|^_data/' || true)
[ "$ui" -gt 0 ] || [ "$copy" -gt 0 ] || exit 0

msg='Voor deze commit hoort de unslop-check nog te gebeuren.'
if [ "$ui" -gt 0 ]; then
  msg="$msg UI gewijzigd: loop de wijziging langs .claude/skills/unslop-ui/references/signs.md (en bij twijfel de skill unslop-ui zelf) en meld in je antwoord wat je hebt nagelopen."
fi
if [ "$copy" -gt 0 ]; then
  msg="$msg Tekst gewijzigd: loop de nieuwe of gewijzigde kopij langs de skill unslop (audit, niet herschrijven) plus .cursor/rules/tekst-verbeteren.mdc, en meld wat je hebt nagelopen."
fi
msg="$msg Is dat al gedaan, commit dan gewoon door."

printf '{"hookSpecificOutput":{"hookEventName":"PreToolUse","additionalContext":"%s"}}\n' "$msg"
