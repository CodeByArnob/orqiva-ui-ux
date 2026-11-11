import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const targetExtensions = ['.md', '.ts', '.tsx', '.js', '.mjs', '.html', '.json', '.css'];

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'dist') continue;
      processDir(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (targetExtensions.includes(ext)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes(' - ')) {
          console.log(`Replacing em-dash in: ${path.relative(rootDir, fullPath)}`);
          // Replace " : " with " : " or " - "
          content = content.replace(/ : /g, ' : ');
          // Replace any remaining standalone " - " with " - "
          content = content.replace(/ - /g, ' - ');
          fs.writeFileSync(fullPath, content, 'utf8');
        }
      }
    }
  }
}

processDir(rootDir);
console.log('Em-dash replacement complete!');
