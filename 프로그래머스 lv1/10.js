// 두 정수 사이의 합

// 내 코드
// function solution(a, b) {
//     let answer = 0;
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             answer += i;
//         }
//     } else {
//         for (let i = b; i <= a; i++) {
//             answer += i;
//         }
//     }
//     return answer;
// }

// Math함수 사용
function solution(a, b){
    let answer = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) answer += i;
    return answer;
  }

const a = 5;
const b = 3; 
console.log(solution(a, b));