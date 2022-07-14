//행렬의 덧셈

// 방법1 2차원배열 
// function solution(arr1, arr2) {
//     let answer = [];

//     for(let i=0; i<arr1.length; i++){
//         let sum = [];
//         for(let j=0; j<arr1[i].length; j++){
//             sum.push(arr1[i][j] + arr2[i][j])
//         }
//         answer.push(sum)
//     }
//     return answer;
// }

// 방법2 map()
function solution(arr1, arr2) {
    return arr1.map((item, idx) => item.map((item2, jdx) => item2 + arr2[idx][jdx]));
}
const arr1 = [[1, 2], [2, 3]]
const arr2 = [[3, 4], [5, 6]]

console.log(solution(arr1, arr2));