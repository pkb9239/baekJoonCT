// 시저 암호 

function solution(s, n) {
    return s.split("").map((el) => {
        if (el == " "){
            return el;
        }
        const tmp = el.charCodeAt()
        return el.toUpperCase().charCodeAt() + n > 90 
            ? String.fromCharCode(tmp + n - 26) 
            : String.fromCharCode(tmp + n)
    }).join('')

}
const s = 'AB';
const n = 1;

console.log(solution(s, n));