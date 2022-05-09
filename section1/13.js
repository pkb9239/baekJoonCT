function solution(s) {
    let answer = '';
    for (let x of s) {
        if (x == x.toUpperCase()) {
            x = x.toLowerCase();
            answer += x;
        } else {
            x = x.toUpperCase();
            answer += x;
        }
    }
    return answer;
}
const str = 'StuDY';
console.log(solution(str));