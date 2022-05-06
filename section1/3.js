
// 내코드
// function solution(a) {
//     let answer;
//     if (a <= 12) {
//         answer = 1;
//     } else if (a % 12 !== 0) {
//         answer = a/12 + 1;
//     } else {
//         answer = a / 12;
//     }
//     console.log(Math.floor(answer));
// }
// solution(23);

function solution(a) {
    let answer = Math.ceil(a/12);
    return answer;
}
console.log(solution(13));