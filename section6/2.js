function solution(a) {
    let answer;
    let stack = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === ')') {
            while (stack.pop() !== '(');
        } 
        else stack.push(a[i]);  
    }
    answer = stack.join('');
    return answer;
}

const a = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';

console.log(solution(a));