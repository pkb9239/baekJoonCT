// 약수의 개수와 덧셈
// 내풀이
// function div(num) {
//     let count = 0;
    
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) count++;
//     }
//     return count;
// }

// function solution(left, right) {
//     let answer = 0;
//     for (let i = left; i <= right; i++) {
//         let count = div(i);
//         if (count % 2 == 0) {
//             answer += i;
//         } else {
//             answer += -i;
//         }
//     }
//     return answer;
// }

const left = 13;
const right = 17;

// 다른사람 풀이
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) { // 제곱근이 정수면 약수의 개수는 홀수
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

console.log(solution(left, right));