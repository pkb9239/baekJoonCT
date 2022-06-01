// 선택정렬
function solution(n, arr) {
    let answer = arr;

    for (let i = 0; i < n-1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) min = j;
       }
       [arr[i], arr[min]] = [arr[min], arr[i]];
    }

    return answer;
}

const arr = [13, 5, 11, 7, 23, 15];
console.log(solution(6, arr));