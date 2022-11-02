// 예산
// 내 풀이
// 정렬해서 그리디를 이용하여 반대로 풀었음

function solution(d, budget) {
    let answer = 0;
    let min = d.sort((a, b) => a - b);
    for (let i = 0; i < min.length; i++) {
        if (budget - min[i] >= 0) {
            budget = budget - min[i];
            answer++;
        } 
    };
    return answer;
}

const d = [2, 2, 3, 3];
const budget = 10;

console.log(solution(d, budget));