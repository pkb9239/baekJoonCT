function solution(m, arr) {
    let answer = 0;
    let sum = 0;
    let lt = 0;
    for (let rt = 0; rt < m; rt++) {
        sum += arr[rt];
        while (sum > m) {
            sum -= arr[lt++];
        }
        answer = answer + (rt - lt + 1);
         //        1  + 2

    }
    return answer;
}

const arr = [1, 3, 1, 2, 3];
console.log(solution(5, arr));