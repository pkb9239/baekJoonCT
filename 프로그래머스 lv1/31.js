// 나머지가 1이 되는 수 찾기
// 내 풀이
// function solution(n) {
//     let answer = 0;
//     for (let i = 0; i <= n; i++) {
//         if (n % i == 1) {
//             answer = i;
//             break;
//         }
//     }
//     return answer;
// }

const n = 10;

console.log(solution(n));

// 다른 풀이
function solution(n, x = 1) {    
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }    
}