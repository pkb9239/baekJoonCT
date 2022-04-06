// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');
// const n = +input[0];
// const testarray = [];
// const testarray1 = [];
// for (let i = 1; i <= n; i++) {
//     const a = input[i].split(" ").map((a) => +a);
//     testarray.push(a[0]);
//     testarray1.push(a[1]);
// }
// testarray.sort((a,b) => a-b);
// testarray1.sort((a,b) => a-b);
// for (let j = 0; j < n; j++) {
//     console.log(`${testarray[j]} ${testarray1[j]}`);

// }
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const N = input.shift();
const coordsArr = input.map(coords =>
  coords.split(' ').map(nums => parseInt(nums))
);

let results = '';      ////////     coordsArr = [ [ 3, 4 ], [ 1, 1 ], [ 1, -1 ], [ 2, 2 ], [ 3, 3 ] ]
coordsArr                            // a = [3, 4], []
  .sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
coordsArr.forEach(a => results += `${a[0]} ${a[1]}\n`);
console.log(results);

