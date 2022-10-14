// function solution(n) {
//     let answer = [];
//     n = n + "";
//     for (let i = n.length - 1; i >= 0; i--) {
//         answer.push(Number(n[i]));
//     }
//     return answer;
// }

const n = 12345;
console.log(solution(n));


function solution(n) {
    return n.toString().split("").reverse().map((item) => Number(item));
}