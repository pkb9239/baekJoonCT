// 완전탐색 최소직사각형
// 내 풀이
// function solution(sizes) {
//     const b = sizes.map((item) => item.sort((a, b) => a - b));
//     let h = 0;
//     let w = 0;
//     for (let i = 0; i < b.length; i++) {
//         if (b[i][0] > h) {
//             h = b[i][0];
//         }
//     }
//     for (let j = 0; j < b.length; j++) {
//         if (b[j][1] > w) {
//             w = b[j][1];
//         }
//     }
//     return h * w;
// }
const sizes = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]];
// 다른 사람 풀이
// sort(), Math.max() 메서드와 map() 메서드 이용 
function solution(sizes) {
    const newSizes = sizes.map(e => e.sort((a, b) => b - a));
    return Math.max(...newSizes.map(e => e[0])) * Math.max(...newSizes.map(e => e[1]));
}
console.log(solution(sizes));