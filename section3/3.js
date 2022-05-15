function solution(s) {
    let answer='';
   // 대문자아스키코드는 65~90  소문자 97~122
    for (let x of s) {
        let num = x.charCodeAt();
        if (65<= num <= 90 && 97 <= num <= 122) {
            answer = x.replace('num', '');
        }  
    }
    return answer;
}

const str = 'g0en2T0s8eSoft';
console.log(solution(str));