const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const envPath = path.join(root, '.env');
const outputPath = path.join(root, 'src', 'environments', 'environment.ts');

if (!fs.existsSync(envPath)) {
  console.error('.env não encontrado em', envPath);
  process.exit(1);
}

const envFile = fs.readFileSync(envPath, 'utf-8');
const lines = envFile.split(/\r?\n/);
const mapKey = lines
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#'))
  .map((line) => line.split('='))
  .reduce((acc, [k, ...rest]) => {
    acc[k] = rest.join('=');
    return acc;
  }, {});

const key = mapKey['GOOGLE_MAPS_API_KEY'] || '';

const output = `export const environment = {
  production: false,
  googleMapsApiKey: '${key.replace(/'/g, "\\'")}'
};\n`;

fs.writeFileSync(outputPath, output, 'utf-8');
console.log('Arquivo environment.ts atualizado com GOOGLE_MAPS_API_KEY');
