// 명예의 전당 (1)
// // 내 풀이
// function solution(k, score) {
//     // 명예의 전당 배열
//     const honor = [];
//     const result = [];
//     for(let i = 0 ; i < score.length ; i ++) {
//         // 명예의 전당 기본 셋팅
//         if (i < k) {
//             honor.push(score[i]);
//             honor.sort((a, b) => b - a);
//         }
//         if (i >= k) {
//             honor.push(score[i]);
//             honor.sort((a, b) => b - a);
//             honor.pop();
//         }
//         result.push(honor[honor.length - 1]);
//     }
//     return result;
// }

function solution(k, score) {
    const answer = [];
    const honor = [];
    return score.reduce((a, c) => {
        if (honor.length < k) {
            honor.push(c);
            honor.sort((a, b) => a - b);
        }
        else {
            honor.push(c);
            honor.sort((a, b) => a - b);
            honor.shift();
        }
        a.push(honor[0]);
        return a;
    }, []);
}



const k = 3;
const score = [10, 100, 20, 150, 1, 100, 200];

console.log(solution(k, score));