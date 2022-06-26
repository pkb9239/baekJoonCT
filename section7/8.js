function solution(arr) {
    let answer = 0;
    arr.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0]; // 끝나는 시간으로 정렬한다.
        else return a[1] - b[1];
    })
    let et = 0;
    for (let x of arr) {
        if (x[0] >= et) {
            answer++;
            et = x[1];
        }
    }
    return answer;
};

const arr = [
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7]
];
console.log(solution(arr));