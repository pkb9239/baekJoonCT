const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const set = [...new Set(input)];
const sort = set.sort((a, b) => a - b);
for (let i = 0; i < sort.length; i++) {
    console.log(sort[i]);
}
