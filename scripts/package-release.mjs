import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const siteDistDir = path.join(rootDir, 'site', 'dist');

const VERSION = '1.0.0';

console.log('\n========================================');
console.log(`ORQIVA UI/UX : Packaging Release v${VERSION}`);
console.log('========================================\n');

// Clean dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 1. Package Skill Package ZIP: orqiva-ui-ux-v1.0.0.zip
console.log('1. Building Skill Distribution Package...');
const skillZipName = `orqiva-ui-ux-v${VERSION}.zip`;
const skillZipPath = path.join(distDir, skillZipName);

// Create temp directory for skill files
const tempSkillDir = path.join(distDir, 'temp-skill');
fs.mkdirSync(tempSkillDir, { recursive: true });

const skillFilesAndDirs = [
  'SKILL.md',
  'README.md',
  'LICENSE',
  'CHANGELOG.md',
  'bin',
  '.agent-skills',
  'docs',
  'references',
  'workflows',
  'checklists',
  'examples',
  'tests'
];

for (const item of skillFilesAndDirs) {
  const src = path.join(rootDir, item);
  const dest = path.join(tempSkillDir, item);
  if (fs.statSync(src).isDirectory()) {
    fs.cpSync(src, dest, { recursive: true });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Compress skill package
execFileSync('tar', ['-a', '-cf', skillZipPath, '-C', tempSkillDir, '.'], { stdio: 'inherit' });
fs.rmSync(tempSkillDir, { recursive: true, force: true });
console.log(`  ✓ Created: dist/${skillZipName} (${(fs.statSync(skillZipPath).size / 1024).toFixed(1)} KB)`);

// 2. Package Documentation Website: orqiva-docs-website-v1.0.0.zip
console.log('2. Packaging Documentation Website Bundle...');
const docsZipName = `orqiva-docs-website-v${VERSION}.zip`;
const docsZipPath = path.join(distDir, docsZipName);
if (fs.existsSync(siteDistDir)) {
  execFileSync('tar', ['-a', '-cf', docsZipPath, '-C', siteDistDir, '.'], { stdio: 'inherit' });
  console.log(`  ✓ Created: dist/${docsZipName} (${(fs.statSync(docsZipPath).size / 1024).toFixed(1)} KB)`);
} else {
  console.warn('  ! Warning: site/dist not found, please build site first.');
}

// 3. Package Complete Source Tarball: orqiva-ui-ux-source-v1.0.0.tar.gz
console.log('3. Building Full Source Archive...');
const sourceTarName = `orqiva-ui-ux-source-v${VERSION}.tar.gz`;
const sourceTarPath = path.join(distDir, sourceTarName);

execFileSync('tar', [
  '--exclude=.git',
  '--exclude=node_modules',
  '--exclude=site/node_modules',
  '--exclude=dist',
  '-czf',
  sourceTarPath,
  '-C',
  rootDir,
  '.'
], { stdio: 'inherit' });
console.log(`  ✓ Created: dist/${sourceTarName} (${(fs.statSync(sourceTarPath).size / 1024).toFixed(1)} KB)`);

// 4. Compute Checksums: dist/checksums.sha256
console.log('4. Generating Cryptographic SHA-256 Checksums...');
const artifacts = [skillZipName, docsZipName, sourceTarName].filter(f => fs.existsSync(path.join(distDir, f)));
let checksumContent = '';
const artifactDetails = [];

for (const art of artifacts) {
  const filePath = path.join(distDir, art);
  const data = fs.readFileSync(filePath);
  const hash = crypto.createHash('sha256').update(data).digest('hex');
  checksumContent += `${hash}  ${art}\n`;
  artifactDetails.push({
    name: art,
    size: (fs.statSync(filePath).size / 1024).toFixed(1) + ' KB',
    sha256: hash
  });
  console.log(`  SHA256 (${art}): ${hash}`);
}

fs.writeFileSync(path.join(distDir, 'checksums.sha256'), checksumContent);
console.log(`  ✓ Saved: dist/checksums.sha256`);

// 5. Generate Release Notes: dist/RELEASE_NOTES.md
console.log('5. Generating GitHub Release Notes...');
let releaseNotes = `# ORQIVA UI/UX v${VERSION} : Production Release\n\n`;
releaseNotes += `**ORQIVA UI/UX** is a production-grade Adaptive Design Intelligence ecosystem for AI coding agents and frontend engineers.\n\n`;
releaseNotes += `### Core Capabilities in v${VERSION}\n`;
releaseNotes += `- **Adaptive Visual Direction Matrix**: Contextual adaptation for Banking/Fintech, Developer Observability, Healthcare EHR, E-Commerce, and Marketing.\n`;
releaseNotes += `- **WCAG 2.2 AA Enforcement**: 4.5:1 text contrast ratios, visible keyboard focus rings, accessible names, and 48px touch targets.\n`;
releaseNotes += `- **8 Real Interface Implementations**: Complete with real screenshots and interactive demo sandbox.\n`;
releaseNotes += `- **Multi-Framework Architecture**: Concrete design token translation for React/Tailwind, Android Jetpack Compose, Flutter, and React Native.\n`;
releaseNotes += `- **Progressive Reference Loading**: Optimized for Claude Code, Cursor, Windsurf, Roo Code, Antigravity, and Gemini CLI.\n\n`;

releaseNotes += `### Installation\n\n`;
releaseNotes += `\`\`\`bash\n# Universal Agent Skills CLI\nnpx skills add CodeByArnob/orqiva-ui-ux --skill orqiva-ui-ux -g -a '*'\n\`\`\`\n\n`;

releaseNotes += `### Release Artifacts & Checksums\n\n`;
releaseNotes += `| Artifact File | Size | SHA-256 Checksum |\n`;
releaseNotes += `|---|---|---|\n`;
for (const item of artifactDetails) {
  releaseNotes += `| \`${item.name}\` | ${item.size} | \`${item.sha256}\` |\n`;
}

releaseNotes += `\n---\n*Verified against WCAG 2.2 Level AA and open Agent Skills specifications.*\n`;

fs.writeFileSync(path.join(distDir, 'RELEASE_NOTES.md'), releaseNotes);
console.log(`  ✓ Saved: dist/RELEASE_NOTES.md\n`);

console.log('========================================');
console.log('ALL RELEASE ARTIFACTS PACKAGED SUCCESSFULLY!');
console.log('========================================\n');
