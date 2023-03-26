// function solution(n, m, section) {
//     let answer = 0;
//     // 현재까지 칠한 구역
//      let part = 0;
//      section.forEach((n) => {
//         // 현재 구역이 현재까지 칠한 구역보다 크다면
//         if (n > part) {
//             // 구역을 칠해주고 현재까지 칠한 구역을 업데이트 시켜준다.
//             part = n + m - 1;
//             // 페인트를 칠했으니 1증가 시킨다.
//             answer++;
//         }
//      });
    
//     return answer;
// }

const n = 8;
const m = 4;
const section = [2, 3, 6];

console.log(solution(n, m, section));