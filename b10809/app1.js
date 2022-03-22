const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(word) {
    let answerArray = new Array(26).fill(-1);
    for (let i = 0; word.length; i++) {
        let nowChar = word[i];
        let answerArrayIdx = nowChar.charCodeAt() - 97;
        if (answerArray[answerArrayIdx] === -1) {
            answerArray[answerArrayIdx] = i;
        }
    }

    for (let i = 0; i < answerArray.length; i++) {
        process.stdout.write(answerArray[i] + ' ');
    }
}