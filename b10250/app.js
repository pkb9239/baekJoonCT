const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const t = +input[0];
const test = [];
for (let i = 1; i <= t; i++) {
  test.push(input[i].split(' ').map((item) => item));
}

solution(t, test);

function solution(T, data) {
  let nAnswer = "";
  for (let i = 0; i < T; i++) {
    const arr = data[i];
    const H = arr[0]; //6층 30
    const W = arr[1]; //12호 50 
    const N = arr[2]; //10번째  72        
    let answerH = N % H;
    if (answerH === 0) {
      answerH = H;
    }
    let answerW = Math.ceil(N / H);
    answerW < 10 ? (answerW = String(0) + answerW) : answerW;

    nAnswer += `${answerH}${answerW}` + "\n";
    }
    console.log(nAnswer);
  }
