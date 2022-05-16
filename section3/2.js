function solution(s) {
    let answer = 'YES';
    s = s.toLowerCase().replace(/[^a-z]/g, '');/// 소문자a-z까지가 아닌것들을 찾아 빈문자열로 바꿈 
    if (s.split('').reverse().join('') !== s) return "NO";
    return answer;
}

const str = 'found7, time: study; Yduts; emit, 7Dnuof';  
console.log(solution(str));