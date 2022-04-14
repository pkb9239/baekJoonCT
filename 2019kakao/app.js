const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const item = input[1].split(" ").map((item) => +item);

solution(+input[0], item);

function solution(N, stages) {
    let totalNum = stages.length;
    const answer = [];
    for (let i = 1; i <= N; i++) { 
        let stageNum = stages.filter(ele => ele == i).length;
        let failRatio = 0;
        if (stageNum === 0) {
            failRatio = 0;
        } else {
            failRatio = (stageNum) / totalNum;
        }
        totalNum -= stageNum;
        answer.push({ idx: i, ratio: failRatio });
    }
    console.log(answer);
    answer.sort((a, b) => {
        if (a.ratio > b.ratio) {     
            return -1;
        } else if (a.ratio < b.ratio) {
            return 1;
        } else {
            if (a.idx > b.idx) {
                return 1;
            } else {
                return -1;
            }
        }
    });
    console.log( answer.map(item => item.idx));
}


// function solution(N, stages) {
//     return Array.from({length:N}).map((v,i)=>{
//         var a = stages.length;
//         stages = stages.filter(v=>v>i+1);
//         return {i:i+1, r:(a-stages.length)/a};
//     }).sort((a,b)=>a.r==b.r ? a.i-b.i : b.r-a.r).map(v=>v.i);
// }