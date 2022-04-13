const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const item = [];
for (let i = 0; i < input.length; i++) {
    const a = input[i].split(" ").map((item) => +item);
    item.push(a);
}
let answerX = 0;
    if(item[0][0] == item[1][0]) {
        answerX = item[2][0];
    } else if (item[1][0] == item[2][0]) {
        answerX = item[0][0];
    } else {
        answerX = item[1][0];
    }
    let answerY = 0;
    if(item[0][1] == item[1][1]) {
        answerY = item[2][1];
    } else if (item[1][1] == item[2][1]) {
        answerY = item[0][1];
    } else {
        answerY = item[1][1];
    }
console.log(answerX, answerY);


