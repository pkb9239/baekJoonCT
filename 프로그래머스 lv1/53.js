// 콜라 문제 

function solution(a, b, n) {
    let answer = 0;
    while (n >= a) {
        answer += Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + (n % a);
    }
    return answer;
}
const a = 2;
const b = 1;
const n = 20;
console.log(solution(a, b, n))