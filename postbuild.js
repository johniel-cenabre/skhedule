const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, './build');
const dest = path.join(__dirname, './');

fs.cpSync(source, dest, {recursive: true});