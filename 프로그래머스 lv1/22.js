// x만큼 간격이 있는 n개의 숫자

/*
    내풀이 => for 문 사용
*/
// function solution(x, n) {
//     let answer = [];
//     for (let i = 1; i <= n; i++) {
//         answer.push(x * i);
//     }
//     return answer;
// }

// Array, fill, map 메소드 사용해서 한줄 
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v);
}

const x = -4;
const n = 2;
console.log(solution(x, n));