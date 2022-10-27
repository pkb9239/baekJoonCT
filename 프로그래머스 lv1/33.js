// 수박수박수박수박수박
// 내풀이 
// function solution(n) {
//     let answer = "";
//     for (let i = 0; i < n; i++) {
//         answer += i % 2 === 0 ? "수" : "박";
//     }
//     return answer;
// }


// 다른 풀이 
// str.substring(indexStart[, indexEnd])
// indexStart : 반환문자열의 시작 인덱스   indexEnd :반환문자열의 마지막 인덱스 (포함하지 않음.)
function solution(n) {
    return "수박".repeat(n).substring(0, n);
}

const n = 3;
console.log(solution(n));