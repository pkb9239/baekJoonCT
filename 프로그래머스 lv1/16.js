// 정수 제곱근 판별
// function solution(n) {
//     let answer = 0;
//     let sqrt = Math.sqrt(n);
//     if (sqrt % 1 !== 0) { // 나머지를 이용해 소숫점 판별, 제곱근이 아닐 경우
//         answer = -1;
//     } else {
//         answer = Math.pow(sqrt+1, 2); // 제곱근일 경우
//     }
//     return answer
// }

const n = 121;
// const n = 3;

console.log(solution(n))

// 삼항연산자 이용하기

function solution(n) {
    return Math.sqrt(n) % 1 == 0 ? Math.pow(Math.sqrt(n) + 1, 2) : -1
}