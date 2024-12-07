import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.resolve(__dirname, '../src/assets');
const outputDir = path.resolve(__dirname, '../src/assets');
const outputFilePath = path.join(outputDir, 'FolderDefinitions.ts');

function generateImageTypes() {
    const items = fs.readdirSync(assetsDir);
    let typeDefs = '';
    const ImageTypes = {};

    const individualTypes = items
        .filter(item => fs.statSync(path.join(assetsDir, item)).isDirectory())
        .map(item => {
            const folderPath = path.join(assetsDir, item);
            const files = fs.readdirSync(folderPath).map(file => path.parse(file).name);
            ImageTypes[item] = `Image${capitalize(item)}`;
            return `export type Image${capitalize(item)} = ${generateTypeUnion(files)};`;
        })
        .join('\n\n');
    typeDefs += individualTypes + '\n';

    let folderTypeDefs = 'export type ImageFolder = {\n';
    items.forEach(item => {
        const itemPath = path.join(assetsDir, item);

        if (fs.statSync(itemPath).isDirectory()) {
            folderTypeDefs += `   ${item}: ${ImageTypes[item]},\n`;
        }
    });
    folderTypeDefs += '};\n\n';

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputFilePath, folderTypeDefs + typeDefs, 'utf8');
}

function generateTypeUnion(files) {
    return files.length > 0
        ? files.map(file => `\n   | "${file}"`).join('')
        : 'never';
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

generateImageTypes();
