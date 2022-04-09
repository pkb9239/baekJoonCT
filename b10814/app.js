const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input.shift();
input.sort((a, b) => {
    if (a.split(" ")[0] !== b.split(" ")[0]) {
        return a.split(" ")[0] - b.split(" ")[0];
    } else {
        return b.split(" ")[1] - a.split(" ")[1];
    }
});

console.log(input.join('\n'));