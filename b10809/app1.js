const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(word) {
    const a = new Array(26).fill(-1);
    for (let i = 0; a.length; i++) {
        let nowChar = word[i];
        let answerArrayIdx = nowChar.charCodeAt() - 97;
        if (a[answerArrayIdx] === -1) {
            a[answerArrayIdx] = i;
        }
    }

    for (let i = 0; i < a.length; i++) {
        process.stdout.write(a[i] + ' ');
    }
}