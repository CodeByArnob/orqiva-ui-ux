# Contributing to ORQIVA UI/UX

Thank you for your interest in contributing to ORQIVA UI/UX! We are committed to maintaining a high-rigor, production-grade design intelligence ecosystem for engineers and AI agents worldwide.

---

## 1. Development Workflow

1. Fork the repository and create your branch from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. Install dependencies:
   ```bash
   cd site && npm install && cd ..
   ```
3. Make your modifications to `references/`, `workflows/`, `checklists/`, or `site/`.
4. Validate all links, frontmatter, and assets:
   ```bash
   npm run validate
   ```
5. If modifying showcase components, regenerate screenshots:
   ```bash
   npm run capture
   ```
6. Build and verify the site:
   ```bash
   npm run build:site
   ```

---

## 2. Quality Standards for Pull Requests

- **No Generic AI Aesthetics**: Contributions must not encourage default dark-purple gradient traps.
- **Accessibility Compliance**: All proposed designs and components must adhere to WCAG 2.2 AA (minimum 4.5:1 text contrast).
- **Working Code**: Every component must include working states (default, hover, focus-visible, active, loading, empty, error).
- **Validation**: `npm run validate` must pass with 0 errors.

---

## 3. Submitting a Pull Request

- Provide a clear, descriptive PR title following [Conventional Commits](https://www.conventionalcommits.org/) (e.g. `feat(tokens): add Jetpack Compose M3 color scheme mapper`).
- Fill out the provided pull request template completely.
- Ensure all CI workflow checks pass.
