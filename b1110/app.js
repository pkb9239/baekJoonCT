const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
    let makeNum = N;
    let ans = 0;
    while (makeNum !== N || ans === 0) {
        let ten; //십의 자리 숫자
        let one; //일의 자리 숫자
        if (makeNum >= 10) {
            ten = +String(makeNum)[0];
            one = +String(makeNum)[1];
        } else {
            ten = 0;
            one = +String(makeNum)[0];
        }

        makeNum = ten + one;
        if (makeNum >= 10) {
            makeNumOne = +String(makeNum)[1];
        } else {
            makeNumOne = +String(makeNum)[0];
        }
        makeNum = +( String(one) + String(makeNumOne) );
        ans++; 
    }

    console.log(ans);
}