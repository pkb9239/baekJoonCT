const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const n = input[0];
const item = [];
for (let i = 1; i <= n; i++) {
  item.push( input[i].split(" ").map((item) => +item));
}
console.log(item);

function solution(number, paper) {
    let white = 0;
    let blue = 0;
    function divide(x, y, length) {     // 0, 4, 4
        let total = 0;
        for (let i = x; i < x + length; i++) {
            for (let j = y; j < y + length; j++) {
                if (paper[i][j]) total++; // 0이 아니면
            }
        }
        if (!total) {
            white++; // 0이면
        } else if (total === length * length) {
            blue++;
        } else {                            //paper[i][j]
            divide(x, y, length / 2);     // 0 0 4    제1사분면
            divide(x, y + length / 2, length / 2);      // 0, 4, 4     paper[0][4] papaer[0][5] paper[0][6] paper[0][7] 제2사분면
            divide(x + length / 2, y, length / 2);  // 4, 0, 4  제3사분면
            divide(x + length / 2, y + length / 2, length / 2); //4, 4, 4 제4사분면
        }
    }

    divide(0, 0, number);
    console.log(white);
    console.log(blue);
}