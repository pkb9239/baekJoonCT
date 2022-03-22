const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let splitedInput = input[0].split(' ');

solution(splitedInput[0],splitedInput[1]);

function solution(a, b) {
    const newA = String(a); //734
    const newB = String(b);
    let newa = '';
    let newb = '';
    for (let i = 2; i >= 0; i--) {
        newa = newa + newA[i];
    }
    for (let i = 2; i >= 0; i--) {
        newb = newb + newB[i];
    }
    if (+newa > +newb) {
        console.log(newa);
    } else  {
        console.log(newb);
    }
}
