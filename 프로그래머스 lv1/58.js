// 가장 가까운 같은 글자

function solution(s) {
    let answer = [];
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (!stack.includes(s[i])) {
            answer.push(-1);
            stack.push(s[i]);
            continue;
        }
        // stack = b, a, n

        if (stack.includes(s[i])) {
            answer.push(stack.length - stack.lastIndexOf(s[i]));
            stack.push(s[i]);
            continue;
        }
    }
    return answer;
}

const s = "banana";
console.log(solution(s));
