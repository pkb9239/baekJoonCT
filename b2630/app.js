// const fs = require('fs');

// const readFileSyncAddres = "input.txt";
// let input = fs.readFileSync(readFileSyncAddres).toString().trim().split("\n");
// console.log(input);
// [number, ...paper] = input; 
// number = Number(number);
// paper = paper.map((string) => string.split(" ").map((i) => +i));
// console.log(number, paper);       // 구조분해할당 이용
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const n = input[0];
const item = [];
for (let i = 1; i <= n; i++) {
  item.push( input[i].split(" ").map((item) => +item));
}

solution(n, item);

function solution(number, paper) {
  let white = 0;
  let blue = 0;
  function divide(x, y, length) {
    let tempCount = 0;
    for (let i = x; i < x + length; i+=1) {
      for (let j = y; j < y + length; j+=1) {
        if (paper[i][j]) tempCount += 1;
      }
    }
    if (!tempCount) {
      white += 1;
    } else if (tempCount === length *length) {
      blue +=1;
    } else {
      divide(x, y, length / 2);
      divide(x, y + length / 2, length / 2);
      divide(x + length / 2, y, length / 2);
      divide(x + length / 2, y + length / 2, length / 2);
    }
  }
  divide(0, 0, number);
  console.log(white);
  console.log(blue);
}

