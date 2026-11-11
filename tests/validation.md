# Automated & Manual Skill Validation Protocol

This document outlines the validation procedures executed to ensure ORQIVA UI/UX meets production-grade open-source standards.

---

## 1. Automated Syntax & Integrity Checks

Run the automated validation test suite:

```bash
# Validate skill manifest, frontmatter, progressive links, and token consistency
npm run validate
```

### Automated Checks:
1. **Frontmatter Verification**: `SKILL.md` contains valid YAML frontmatter with `name`, `description`, `license`, `compatibility`, and `metadata.version`.
2. **Link Integrity**: Every relative link in `SKILL.md`, `references/`, `workflows/`, and `checklists/` resolves to an existing file on disk.
3. **Markdown Lint**: Files are valid UTF-8 markdown without unclosed code blocks or broken formatting.
4. **CSS Token Sanity**: `examples/design-tokens.css` parses without syntax errors and defines all required semantic variables.
5. **Screenshot Asset Verification**: All referenced screenshot files exist in `assets/screenshots/`, possess valid PNG binary headers, and meet resolution standards.

---

## 2. Interactive Host Verification

When testing with coding agents (Claude Code, Antigravity, Cursor, Windsurf, Roo Code):
1. **Skill Discovery**: The agent discovers `orqiva-ui-ux` when invoked with relevant design prompts.
2. **Progressive Loading**: The agent loads only the relevant reference files specified in `SKILL.md` rather than polluting its context window with the entire repository.
3. **Design Direction Adaptation**: The agent does not emit generic purple-gradient cards; it articulates and applies the domain-appropriate visual direction.
4. **Functional Realism**: Generated code includes state handlers, keyboard listeners, semantic elements, and accessible contrast ratios.
