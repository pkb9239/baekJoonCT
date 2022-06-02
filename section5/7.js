function solution(a, b) {
    let answer = 'YES';
    let sh = new Map();
    for (let x of a) {
        if (sh.has(x)) sh.set(x, sh.get(x)+1);
        else sh.set(x, 1);
    }
    console.log(sh);
    for (let x of b) {
        if (!sh.has(x) || sh.get(x) === 0) return "NO";
        sh.set(x, sh.get(x) - 1); 
    }
    return answer;
}

const str =['Caaab','abaCC'];
console.log(solution(str[0], str[1]));
