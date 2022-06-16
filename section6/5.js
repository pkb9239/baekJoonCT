// 중괄호 문제는 10에 9은 스택으로 푸는 문제이다.

function solution(s) {
    let answer = 0;
    let stack  = [];
    for (let i = 0; i < str.length; i++) {
        if (s[i] == '(') stack.push(s[i])
        else {
            stack.pop();
            if (s[i - 1] == ')') answer += 1;
            else answer += stack.length;      
            }
        } 
    return answer;
}

const str = '()(((()())(())()))(())';

console.log(solution(str));