const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input.shift();

let item = new Set(input);
item = [...item];

item = item.sort(function (a, b) {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  
//   item.forEach(element => {    런타임 에러 나기때문에
//       console.log(element);
//   });
console.log(item.join('\n'));