// 평균 구하기

function solution(arr) {
    let answer = ((arr.reduce((pre, cur) =>  pre + cur, 0)) / arr.length);
    return answer;
}

const arr = [1, 2, 3, 4];

console.log(solution(arr));