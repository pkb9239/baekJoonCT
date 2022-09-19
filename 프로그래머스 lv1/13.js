//나머지가 1이 되는 수 찾기
function solution(n) {
    let answer = 0;
    for (let i = 0; i < n; i++) {
        if (answer > 0) {
            break;
        }
        if (n % i == 1) {
            answer = i;
        }
    }
    return answer;
}
const n = 12;
console.log(solution(n));