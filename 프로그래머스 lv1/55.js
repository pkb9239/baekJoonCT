// 크기가 작은 부분 문자열
// slice() 함수 사용

function solution(t, p) {
    let count = 0;
    const numberP = Number(p);
    for (let i = 0; i < t.length - p.length + 1; i++) {
        let numberT = Number(t.slice(i, i + p.length));
        if (numberP >= numberT) count++;
    }
    return count;
}

const t = "3141592";
const p = "271";

console.log(solution(t, p));