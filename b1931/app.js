const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = input.shift();
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(input[i].split(" ").map((item) => +item));
};
arr.sort((a, b) => {
    if (a[0] === b[0]) {
        return a[1] - b[1];
    };
    return a[0] - b[0];
});

solution(arr);

function solution (arr) {
    let answer = 0;
    let et = 0;
    for (let x of arr) {
        if (x[0] > et) {
            answer++;
            et = x[1];
        }
    };
    console.log(answer);
}
