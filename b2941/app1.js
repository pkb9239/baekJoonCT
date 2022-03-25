const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

console.log(input[0].replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g,'a').length); //replace(/정규식/g,대체할 문자) 