function solution(arr) {
    let answer= 0;
    const sort = arr.sort((a, b) => {
        return a[0] - b[0];
    });
    for (let i = 0; i < sort.length; i++) {
        for (let j = 1 + i; j < sort.length -1 - i; j++) {
            if ( sort[j][0] < sort[i][1] && sort[i][1]< sort[j][1]) answer++;
        }
    }
    return answer;
}

const arr = [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14]
];

console.log(solution(arr));