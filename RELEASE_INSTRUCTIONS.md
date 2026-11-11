# Release Instructions & Versioning Strategy

This document outlines the standard release procedure for maintainers of ORQIVA UI/UX.

---

## 1. Semantic Versioning Standards

We follow [Semantic Versioning 2.0.0](https://semver.org/):

- **Patch Release (`1.0.1`)**: Backward-compatible bug fixes, link corrections, accessibility polish.
- **Minor Release (`1.1.0`)**: Backward-compatible new features, new design directions, framework mappers, or workflow modules.
- **Major Release (`2.0.0`)**: Breaking architectural changes or incompatible token structure revisions.

---

## 2. Pre-Release Verification Checklist

Before tagging or cutting a release:

1. [ ] Ensure working directory is clean: `git status`.
2. [ ] Run full test & validation suite:
   ```bash
   npm run validate
   ```
3. [ ] Re-capture screenshots if showcase components were touched:
   ```bash
   npm run capture
   ```
4. [ ] Build the documentation site:
   ```bash
   npm run build:site
   ```
5. [ ] Update `CHANGELOG.md` with new version details, date, and changes.
6. [ ] Update version string in `SKILL.md`, `package.json`, and `scripts/package-release.mjs`.

---

## 3. Creating a Release

### Option A: Tag-Based Automated Release (Recommended)
Push a git tag matching `v*`:

```bash
git tag v1.0.0
git push origin v1.0.0
```

The GitHub Actions workflow `.github/workflows/release.yml` will automatically:
1. Run all validation checks.
2. Build the documentation website.
3. Package `orqiva-ui-ux-v1.0.0.zip`, `orqiva-docs-website-v1.0.0.zip`, and source archives.
4. Calculate cryptographic SHA-256 checksums.
5. Create a GitHub Release with the attached artifacts and formatted release notes.

### Option B: Manual GitHub Actions Trigger
1. Navigate to **Actions** -> **Release Package & Publish**.
2. Click **Run workflow**, specify the tag name (e.g. `v1.0.0`), and submit.
