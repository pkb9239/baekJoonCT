function solution(a) {
    let answer = 'NO';
    let stack = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === '(') {
            stack.push(a[i]);
        } else {
            if(stack.length === 0) return 'NO';
            stack.pop();
        }
    }
    if (stack.length === 0) answer = 'YES';

    return answer;
}

const a = '(())()';

console.log(solution(a));