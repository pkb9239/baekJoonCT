// 최대공약수와 최소공배수

function solution(n, m) {
    let answer = [];
    let num = n > m ? n : m;

    let G = 0; // 최대공약수
    let L = 0; // 최소공배수
    
    // 최대 공약수
    for (let i = 1; i < num; i++) {
        if (n % i === 0 && m % 1 === 0) {
            G = i;
        }
    }

    // 최소 공배수
    // 최소 공배수는 두수의 곱을 이용하여 최대공약수로 나눠주면 된다.
    L = n * m / G;
    answer = [G, L];
    return answer;
}

const n = 5;
const m = 2;

console.log(solution(n, m));