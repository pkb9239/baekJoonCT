// #투포인터 알고리즘, O(n+m)


function solution(arr1, arr2) {
    let answer = [];
    let n = arr1.length;
    let m = arr2.length;
    let p1 = 0;
    let p2 = 0;
    while (p1 < n && p2 < m) {
        if (arr1[p1] <= arr2[p2]) {
            answer.push(arr1[p1++]);
        } else {
            answer.push(arr2[p2++]);
        }
    }
    while (p1 < n) answer.push(arr1[p1++]);  // 위에 다하고 p1이 남은 경우
    while (p2 < m) answer.push(arr2[p2++]);  // 위에 다하고 p2가 남은 경우

    return answer;
}
const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];
console.log(solution(arr1, arr2));

// function solution(arr1, arr2) {
//     let answer;
//     answer = arr1.concat(arr2);
//     answer = answer.sort((a, b)=> a - b);

//     return answer;
// }
// const arr1 = [1, 3, 5];
// const arr2 = [2, 3, 6, 7, 9];
// console.log(solution(arr1, arr2));