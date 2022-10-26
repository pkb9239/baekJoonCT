// 음양 더하기
// 내 풀이
// function solution(absolutes, signs) {
//     let answer = 0;
//     for (let i = 0; i < absolutes.length; i++) {
//         if (signs[i] == true) {
//             answer += absolutes[i];
//         } else {
//             answer += -absolutes[i];
//         }
//     }
//     return answer;
// }

// reduce 메서드를 사용해서 풀어보기
function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
const absolutes = [1, 2, 3];
const signs = [false, false, true];
console.log(solution(absolutes, signs));