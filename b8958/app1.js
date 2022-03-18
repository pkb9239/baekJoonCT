const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const input1 = +input[0];
const testArray = input.slice(1);

solution(input1, testArray);

function solution(N, testarray) {
    for (let i = 0; i < N; i++) {
        const OXList = testarray[i];
        let o = 0;
        let score = 0;
        for (let j = 0; j < OXList.length; j++) {
            const OorX = OXList[j];
            if (OorX === "O") {
                o++;
                score += o;
            } else {
                o = 0;
            }
        }
        console.log(score);
    }
}