const MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
let result = md.render('# markdown-it rulezz!');

console.log(`result = ${result}`);
