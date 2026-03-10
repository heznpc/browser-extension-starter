const fs = require('fs');

const type = process.argv[2] || 'patch';
const valid = ['major', 'minor', 'patch'];
if (!valid.includes(type)) {
  console.error('Usage: node bump-version.js [major|minor|patch]');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
const v = manifest.version.split('.').map(Number);

if (type === 'major') { v[0]++; v[1] = 0; v[2] = 0; }
else if (type === 'minor') { v[1]++; v[2] = 0; }
else { v[2]++; }

manifest.version = v.join('.');
fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2) + '\n');
console.log(manifest.version);
