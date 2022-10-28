// 내적
// 내 풀이
function solution(a, b) {
    return a.map((item, i) => item * b[i], 0).reduce((pre, cur) => pre + cur, 0);
}

const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];

console.log(solution(a, b));