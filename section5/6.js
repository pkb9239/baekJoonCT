// HASH MAP 알고리즘

function solution(N, arr) {
    let answer;
    let sh = new Map();
    for (let x of arr) {
        if (sh.has(x)) sh.set(x, sh.get(x)+1);
        else sh.set(x, 1);
    }
    
    let max = Number.MIN_SAFE_INTEGER;
    for (let [key, val] of sh) {
        if (val > max) {    
            max = val;
            answer = key;
        }
    }


    return answer;
}

const arr = ['B', 'A', 'C', 'B', 'A', 'C', 'C', 'A', 'C', 'C', 'B', 'D', 'E', 'D', 'E'];
console.log(solution(15, arr));