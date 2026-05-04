import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '../frontend/src');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.jsx')) results.push(file);
        }
    });
    return results;
}

const files = walk(srcDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    content = content.replace(/ — \s*<\/title>/g, '</title>');
    content = content.replace(/at \s*:/g, 'at our platform:');
    content = content.replace(/at \s* /g, 'at our platform ');
    content = content.replace(/on \s* /g, 'on our platform ');
    content = content.replace(/Blog —/g, 'Blog');
    content = content.replace(/Help Center —/g, 'Help Center');
    content = content.replace(/<title> /g, '<title>');
    content = content.replace(/ <\/title>/g, '</title>');
    content = content.replace(/Listing on /g, 'Listing on our platform');
    content = content.replace(/List Your Asset on /g, 'List Your Asset');
    content = content.replace(/About :/g, 'About our Platform');
    content = content.replace(/Careers at :/g, 'Careers');
    content = content.replace(/Security at :/g, 'Security');
    content = content.replace(/ for Business:/g, 'For Business');
    content = content.replace(/ Affiliate Program/g, 'Affiliate Program');
    content = content.replace(/One: Zero/g, 'Premium: Zero');
    
    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log(`Fixed ${file}`);
    }
});
