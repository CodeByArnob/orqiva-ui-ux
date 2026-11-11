# ORQIVA UI/UX — Adaptive Design Intelligence

A portable Agent Skill for designing, implementing, and auditing high-quality application and website interfaces.

## Install
Requires Node.js and the open Agent Skills CLI.

```bash
npx skills add CodeByArnob/orqiva-ui-ux --skill orqiva-ui-ux -g
```

For all agents supported by the CLI:
```bash
npx skills add CodeByArnob/orqiva-ui-ux --skill orqiva-ui-ux -g -a '*'
```

For Claude Code:
```bash
npx skills add CodeByArnob/orqiva-ui-ux --skill orqiva-ui-ux -g -a claude-code
```

Use natural requests: "Use ORQIVA to design a premium mobile banking flow", "Redesign this dashboard for expert users", "Build a responsive SaaS website using this project's stack", or "Audit this Flutter UI for accessibility and usability."

## Philosophy
Understand product, audience, platform, task, brand, and constraints before selecting a visual direction. No universal template or mandatory aesthetic.

## Contents
SKILL.md is the entry point. references/ contains design guidance; workflows/ contains task procedures; checklists/ contains quality gates; tests/ contains acceptance prompts.

## Limitations
This is an instruction/reference skill, not a standalone design app or image generator. Browser previews, screenshots, builds, and device tests require tools in the host agent. Never claim checks that were not performed.

MIT licensed.
