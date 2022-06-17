function solution(n, k) {
    let answer;
    let que = Array.from({ length: n }, (v, i) => i + 1); // que = [1, 2, 3, 4, 5, 6, 7, 8]
    while (que.length) {
        for (let i = 1; i < k; i++) {
            que.push(que.shift());
        }
        que.shift();
        if (que.length === 1) answer = que.shift();
    }
    return answer;
}

console.log(solution(8, 3))