//  푸드 파이터 대회

function solution(food) {
    let answer = '';
    for (let i = 1; i < food.length; i++) {
        answer += String(i).repeat(Math.floor(food[i] / 2));
    }
    return answer + '0' + [...answer].reverse().join('');
}

const food = [1, 3, 4, 6]; 

console.log(solution(food));



















