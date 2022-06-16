function solution(borad, moves) {
    let answer = 0;
    let stack = [];
    moves.forEach(pos => {
        for (let i = 0; i < borad.length; i++) {
            if (borad[i][pos-1] !== 0) {
                let tmp = borad[i][pos-1]; // 배열복사해주고 
                borad[i][pos-1] = 0; // 기본배열의 값을 0으로 만듬 
                if (tmp === stack[stack.length-1]) { // tmp와 스택의 마지막 값과 동일하면 둘다삭제되기 때문에
                    stack.pop();    // stack에 마지막값을 빼주면서 answer 2증가시켜주고
                    answer+=2;
                }
                else stack.push(tmp); // tmp와 스택의 마지막값이 같지않으면 그냥 추가시켜주면된다.
                break; // break를 써줘야 인형하나만 꺼낸다.
            }
        }
    });
    return answer;
}

const borad = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]
];              // 4  3 1 1 3 2 0 4

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(borad, moves))