const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let splitedInput = input[0].split(' ');


const reversePrint = (str) => {
    let output= '';
    for (let i = 2; i >= 0; i--) {
        output += str[i];
    }
    console.log(output);
};

solution(splitedInput[0], splitedInput[1]);


function solution(A, B) {
   for (let i = 2; i >= 0; i--) {
       let nowA = A[i];
       let nowB = B[i];
       if (nowA > nowB) {
           reversePrint(A);
           return;
       } else if (nowA < nowB) {
           reversePrint(B);
           return;
       }
   }    
}

/*    JavaScript 메소드 사용한 방법
function solution(A, B) {
    const a = +[...A].reverse().join('');
    const b = +[...B].reverse().join('');
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
*/  