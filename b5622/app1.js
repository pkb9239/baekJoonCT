const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]); //WA

function solution(word) {
    let answer = 0;
    const one = ["A", "B", "C", "D", "E", "F","G","H","I","J", "K", "L","M", "N", "O","P", "Q", "R", "S","T", "U", "V", "W", "X", "Y", "Z"];
    for(let i = 0; i < word.length; i++) {
        if (one.indexOf(word[i]) <= 2) {
            answer += 3;
        } else if (one.indexOf(word[i]) <= 5) {
            answer += 4;
        } else if (one.indexOf(word[i]) <= 8) {
            answer += 5;
        }
        else if (one.indexOf(word[i]) <= 11) {
            answer += 6;
        }
        else if (one.indexOf(word[i]) <= 14) {
            answer += 7;
        }
        else if (one.indexOf(word[i]) <= 18) {
            answer += 8;
        } else if (one.indexOf(word[i]) <= 21) {
            answer += 9;
        } else if (one.indexOf(word[i]) <= 25) {
            answer += 10;
        }
    }
    console.log(answer);
}