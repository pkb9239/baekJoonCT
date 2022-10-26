// 나누어 떨어지는 숫자 배열
// 내 코드
// function solution(arr, divisor) {
//     let answer = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % divisor == 0) {
//             answer.push(arr[i]);
//         }
//     }
//     if (answer.length === 0) answer.push(-1);
//     return answer.sort((a, b) => a - b);
// }

// filter 메서드와 삼항 연산자 이용
function solution(arr, divisor) {
    let answer = arr.filter(v => v % divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}

const arr = [5, 9, 7, 10]
const divisor = 5;

console.log((solution(arr, divisor)));