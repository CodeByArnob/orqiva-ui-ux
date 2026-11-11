# Agent Skills Specification & Compatibility

ORQIVA conforms to the open [Agent Skills Specification](https://mcpservers.org/agent-skills), an open standard for packaging procedural intelligence, cognitive heuristics, and domain instructions for AI coding agents.

---

## 1. Architectural Distinction: MCP vs Agent Skills

While **Model Context Protocol (MCP)** servers provide AI agents with external capabilities, tools, and real-time data access, **Agent Skills** instruct agents *how* to reason, architect, structure, and verify domain-specific outputs without polluting or exceeding the agent's context window.

```
+-------------------------------------------------------------+
|                        AI Coding Agent                      |
|            (Claude Code, Antigravity, Cursor, Windsurf)     |
+-------------------------------------------------------------+
                              |
              +---------------+---------------+
              |                               |
              v                               v
    +-------------------+           +-------------------+
    |    MCP Servers    |           |   Agent Skills    |
    |  (Tools & Data)   |           | (Heuristics & UX) |
    +-------------------+           +-------------------+
    | GitHub API        |           | ORQIVA UI/UX      |
    | Database Access   |           | Design Systems    |
    | File System       |           | WCAG AA Audits    |
    | Terminal Exec     |           | Token Compilers   |
    +-------------------+           +-------------------+
```

---

## 2. Directory Layout Standard

ORQIVA structures its procedural intelligence following the official Agent Skills schema:

```
orqiva-ui-ux/
├── SKILL.md                          # Mandatory entry point: frontmatter + protocol
├── .agent-skills/
│   └── manifest.json                 # Machine-readable registry discovery manifest
├── references/                       # Progressive modules loaded on demand
│   ├── specialized-archetypes.md     # 7 premier UI archetypes & design tokens
│   ├── design-directions.md          # Visual direction selector & taxonomy
│   ├── visual-foundations.md         # Typographic scale, 8pt grid, color theory
│   ├── accessibility.md              # WCAG 2.2 AA audit heuristics
│   └── mobile-platforms.md           # iOS HIG & Android Material 3 rules
├── workflows/                        # Step-by-step procedures for specific agent goals
│   ├── new-application.md
│   ├── new-website.md
│   └── redesign-existing-ui.md
├── checklists/                       # Quality acceptance criteria
│   ├── accessibility.md
│   └── mobile-ui.md
└── bin/                              # Developer CLI tooling
    └── orqiva.js                     # Interactive initialization & audit engine
```

---

## 3. Progressive Disclosure Architecture

Rather than dumping tens of thousands of tokens into the agent's context upfront:
1. **Discovery Phase**: The host agent only loads the lightweight metadata defined in `SKILL.md` frontmatter.
2. **Context Matching**: When a user asks to design, implement, or review an interface, the agent triggers the skill based on its description.
3. **Targeted Sub-Loading**: The agent inspects `SKILL.md` Section 4 (*Progressive Reference Loading*) and loads only the specific reference file needed for the task (e.g. `references/specialized-archetypes.md` for luxury or neo-banking apps).

---

## 4. Coding Agent Support Matrix

| Agent Platform | Integration Mechanism | Configuration File |
|---|---|---|
| **Claude Code** | Global or project CLAUDE.md | `CLAUDE.md` / `~/.claude/skills/orqiva-ui-ux` |
| **Google Antigravity** | Built-in / Workspace Skill | `~/.gemini/antigravity/skills/orqiva-ui-ux` |
| **Cursor** | Cursor Rules (.mdc format) | `.cursor/rules/orqiva-ui-ux.mdc` |
| **Windsurf** | Workspace Rules | `.windsurfrules` |
| **Roo Code / Cline** | Custom Prompt Profiles | `.clinerules` |
| **Gemini CLI** | Skill Definition & Prompt | `~/.gemini/skills/` |

---

## 5. One-Command Installation via CLI

Developers can install ORQIVA into any supported agent workspace using the companion CLI:

```bash
# Auto-detect and configure all active agent environments
npx orqiva-ui-ux install

# Or target a specific agent
npx orqiva-ui-ux install --agent cursor
npx orqiva-ui-ux install --agent claude
npx orqiva-ui-ux install --agent windsurf
```
