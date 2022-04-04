const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let str = "";
solution(+input[0]);
function PaintStar(i, j){
    if(i % 3 === 1 && j % 3 === 1){
        str += " ";
    }else{
        if(Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0){
            str += "*";
        }else{
            PaintStar(Math.floor(i / 3), Math.floor(j / 3));
        }
    }
}

function solution(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            PaintStar(i, j);
        }
        if(i !== n - 1){
            str+= "\n";
        }
    }
    console.log(str);
}