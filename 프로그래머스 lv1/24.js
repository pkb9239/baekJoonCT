// 두 정수 사이의 합
// function solution(a, b) {
//     let answer = 0;
//     if (a > b) {
//         for (let i = b; i <= a; i++) {
//             answer += i
//         }
//     } else if (a < b) {
//         for (let i = a; i <= b; i++) {
//             answer += i;
//         }
//     } else {
//         answer = a;
//     }
//     return answer;
// }

//Math메서드 사용하기
function solution(a, b){
    let answer = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) answer += i; 
    return answer;
}

const a = 5;
const b = 3;

console.log(solution(a, b));