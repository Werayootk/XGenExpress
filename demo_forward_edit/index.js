const fs = require('fs');
const diff = require('diff');
const { minify } = require('uglify-js');

// Read the content of file1.js and file2.js
let file1Content = fs.readFileSync('./input/image1.controller.js', 'utf8');
let file2Content = fs.readFileSync('./input/image2.controller.js', 'utf8');
// Minify the content of both files
file1Content = minify(file1Content).code;
file2Content = minify(file2Content).code;

// Split the content of both files into words
const file1Words = file1Content.split(/\s+/);
const file2Words = file2Content.split(/\s+/);

// Generate the difference between the two files
const differences = diff.diffWords(file1Content, file2Content);

// Print the differences
differences.forEach(part => {
    // Green color for additions, red color for deletions
    const color = part.added ? '\x1b[32m' : part.removed ? '\x1b[31m' : '\x1b[0m';
    process.stderr.write(color + part.value);
});

// Reset color to default
process.stderr.write('\x1b[0m');
