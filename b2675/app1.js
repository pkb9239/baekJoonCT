const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const testarray = [];
for (let i = 1; i <= +input[0]; i++) {
    const splitedInputRS = input[i].split(" ");
    testarray.push(
        {R: splitedInputRS[0],
         S: splitedInputRS[1]
        }
    );
}

solution(+input[0], testarray);

function solution(T, array) {
    for (let i = 0; i < T; i++) {
        let {R, S} = array[i];
        let p = '';
        for (let j = 0; j < S.length; j++) {
            for (let k = 0; k < R; k++) {
                p += S[j]+'';
            }
        }
        console.log(p);
    }
    
}