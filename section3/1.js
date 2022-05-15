function solution(s) {
    let answer = 'NO';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[(s.length-1)-i]) {
            answer = 'YES';
        }
    }
    return answer;
}

const str = 'gewG';    // 05 14 23 
console.log(solution(str));