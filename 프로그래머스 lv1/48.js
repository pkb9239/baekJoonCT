//  문자열 내 마음대로 정렬하기

function solution(strings, n) {
    let answer;
    answer = strings.sort((a, b) => {
        if (a[n] > b[n]) {
            return 1;
        }
        if (a[n] < b[n]) {
            return -1;
        }
        if (a[n] === b[n]) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        }
    });
    return answer;
}

const strings = ["sun", "bed", "car"];
const n = 1;

console.log(solution(strings, n));