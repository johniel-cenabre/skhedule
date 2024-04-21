const fs = require('fs');
const path = require('path');

const oldPath = path.join(__dirname, './out');
const newPath = path.join(__dirname, '../');

console.log("building static files...");

fs.cpSync(oldPath, newPath, {recursive: true});