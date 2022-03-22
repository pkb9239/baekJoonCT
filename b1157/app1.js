const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(word) {
    const answer = new Array(26).fill(0); ///baaa
    for (let i = 0; i < word.length; i++) {
        answer[word.charCodeAt(i) - 97]++;
    }
    const max = Math.max(...answer); // [3, 1, 0, 0 _++++=]
    const index = answer.indexOf(max);  
    let isSame = false;
    for(let i = 0; i < 26; i++) {
        if (answer[i] === max && index != i) {
            isSame = true;
            break;
        }
    }
    console.log(isSame ? "?" : tring.fromCharCode(index + 65));

}