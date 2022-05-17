function solution(s) {
    let answer="";
    let cnt = 1;
    for (let i = 0; i <= s.length; i++) {
        if (s[i] == s[i+1]) {
            cnt++;
        } else {
            answer+=s[i];
            if (cnt > 1) answer+=String(cnt);
            cnt = 1;
        }
    }
    return answer;
}

const str = 'KKHSSSSSSSE';
console.log(solution(str));