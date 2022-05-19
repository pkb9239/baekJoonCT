function solution(n, k, arr) {
    let answer;
    let tmp = new Set();
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                tmp.add(arr[i]+arr[j]+arr[k]);
            }
        }
    }    // set을 배열화 시킬 때 Array.from 사용
    let a = Array.from(tmp).sort((a, b) => b - a);
    answer = a[k-1];
    return answer;
}

const N = 10;
const K = 3;
const arr = [13, 15, 34, 23, 45, 65, 33, 11 , 26, 42];

console.log(solution(N, K, arr));