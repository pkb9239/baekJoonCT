// 삽입정렬
function solution(n, arr) {
    let answer = arr;
    for (let i = 1; i < n; i++) {
        let cur = arr[i]; 
        let j;
        for (j = i - 1; j >= 0; j--) {
            if (cur < arr[j]) arr[j + 1] = arr[j];
                else break;
        }
        arr[j + 1] = cur;
    }
    return answer;
}

const arr = [11, 7, 5, 6, 10, 9];
console.log(solution(6, arr));