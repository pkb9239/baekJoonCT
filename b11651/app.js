const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const n = input.shift();
const item = input.map((item) => 
    item.split(" ").map((a) => +a));

console.log(item);

let results='';
item.sort((a, b) => {
    if (a[1] !== b[1]) {
        return a[1] - b[1];
    }
    return a[0] - b[0];
});
item.forEach(a => results += `${a[0]} ${a[1]}\n`);
console.log(results);

// let results = '';      ////////     coordsArr = [ [ 3, 4 ], [ 1, 1 ], [ 1, -1 ], [ 2, 2 ], [ 3, 3 ] ]
// coordsArr                            // a = [3, 4], []
//   .sort((a, b) => {
//     if (a[0] !== b[0]) {
//       return a[0] - b[0];
//     }
//     return a[1] - b[1];
//   });
// coordsArr.forEach(a => results += `${a[0]} ${a[1]}\n`);
// console.log(results);


