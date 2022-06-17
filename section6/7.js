// 내가 푼 문제
// function solution(must, hs) {
//     let answer = 'YES';

//     for (let i = 0; i < 1; i++) {
//         if (hs.indexOf(must[i]) < hs.indexOf(must[i + 1]) && hs.indexOf(must[i + 1]) < hs.indexOf(must[i + 2])) {
//             answer = 'YES';
//         } else {
//             answer = 'NO';
//         }
//     }

//     return answer;
// }
// const must = 'CBA';
// const hs = 'CBDAGE';

// console.log(solution(must, hs))


// 큐로 풀어보기
function solution(must, hs) {
    let answer = 'YES';
    let que = [...must];
    for (let x of hs) {
        if (que.includes(x)) {
            que.shift();
        }
    }
    if (que.length !== 0) answer = 'NO';

    return answer;
}
const must = 'EBA';
const hs = 'CBDAGE';

console.log(solution(must, hs))