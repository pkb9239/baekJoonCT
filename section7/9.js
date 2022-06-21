function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let cnt = 0;
    let t_line = [];
    for (let x of arr) {
        t_line.push([x[0], 's']);
        t_line.push([x[1], 'e']);
    }
    t_line.sort((a, b) => {
        if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
        else return a[0] - b[0];
    });
    for (let i = 0; i < t_line.length; i++) {
        if (t_line[i][1] === 's') {
            cnt++;
            if (answer < cnt) answer = cnt;
        } else if (t_line[i][1] === 'e') {
            cnt--;
            if (answer < cnt) answer = cnt;
        }
    }
    return answer;
}

const arr = [
    [14, 18],
    [12, 15],
    [15, 20],
    [15, 30],
    [5, 14]
];

console.log(solution(arr));