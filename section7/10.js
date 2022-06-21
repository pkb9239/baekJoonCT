// 내가 푼 방식
// set으로 중복제거 후 indexOf로 자리 찾음
// function solution(item, m) {
//     let answer;
//     const newItem = [...item];
//     newItem.push(m);
//     newItem.sort((a, b) => a - b);
//     const set = [...new Set(newItem)];
//     console.log(set);
//     answer = set.indexOf(m) + 1;
//     return answer;
// }

function solution(item, m) {
    let answer;
    const newItem = [...item];
    newItem.push(m);
    newItem.sort((a, b) => a - b);
    const set = [...new Set(newItem)];
    console.log(set);
    answer = set.indexOf(m) + 1;
    return answer;
}

const arr = [23, 87, 65, 12, 57, 32, 99, 81];
const M = 81;

console.log(solution(arr, M));