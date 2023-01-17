// [1차] 다트 게임

function solution(dartResult) {
    let score = 0;
    let answer = [];
    let temp = 0;

    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9) { //숫자일 경우
            if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
                //  10일 경우 10으로 만들어주고 0을 건너뛰기 위해 i++ 한다.
                temp = 10;
                i++;
            } else {
                // 0이 아닐 경우 그대로 temp 넣어줌
                temp = dartResult[i];
            }
        } else if (dartResult[i] === "S") {
            answer.push(temp);
        } else if (dartResult[i] === "D") {
            answer.push(Math.pow(temp, 2));
        } else if (dartResult[i] === "T") {
            answer.push(Math.pow(temp, 3));
        } else if (dartResult[i] === "#") {
            answer[answer.length - 1] = answer[answer.length - 1] * -1;
        } else if (dartResult[i] === "*") {
            answer[answer.length - 1] =  answer[answer.length - 1] * 2;
            answer[answer.length - 2] *= 2;
        } 
    }
    for (let i = 0; i < answer.length; i++) {
        score += Number(answer[i]);
    }

    return score;
}


const dartResult = '1D2S3T*';

console.log(solution(dartResult));