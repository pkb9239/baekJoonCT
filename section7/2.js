// 버블정렬
function solution(n, arr) {
    let answer = arr;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return answer;
}

const arr = [13, 5, 11, 7, 23, 15];
console.log(solution(6, arr));