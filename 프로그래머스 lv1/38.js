// 부족한 금액 계산하기
// 내 풀이
// function solution(price, money, count) {
//     let answer = 0;
//     for (let i = 1; i <= count; i++) {
//         answer += price * i;
//     }
//     if (answer - money > 0) {
//         answer - money;
//     }
//     return answer - money > 0 ? answer - money : 0;
// }
const price = 3;
const money = 20;
const count = 4;

// 가우스 사용
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}

console.log(solution(price, money, count));