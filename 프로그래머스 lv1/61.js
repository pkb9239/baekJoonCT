function solution(number, limit, power) {
    let answer = [];
    for (let cur = 1; cur <= number; cur++) {
        let divisor = 0;
        for (let i = 1; i <= Math.sqrt(cur); i++) { // 1, 2
            if (cur % i === 0) {
                if (cur / i === i) divisor++;
                else divisor += 2;
            }
        }
        answer.push(divisor);
    }
    return answer.map((a) => {
        if (a > limit) {
            return power;
        } 
        return a;
    }).reduce((cur, acc) => cur + acc, 0);
}

const number = 5;
const limit = 3;
const power = 2;

console.log(solution(number, limit, power));
