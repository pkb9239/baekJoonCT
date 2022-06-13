const n = 3;
const lost = [3];
const reserve = [1];

console.log(solution(n, lost, reserve));

function solution(n, lost, reserve) {
    let answer; //잃어버린 학생들은 수업에 참여할 수 없게 뺌
    const afterReserve = []; // 체육복 빌려준 목록
    const afterLost = []; // 체육복 빌린 사람

    for(let j = 0; j < reserve.length; j++) {
        const reserveStuNum = reserve[j]; // 여벌 체육복 가지고 있는 학생 번호

        for(let i = 0; i < lost.length; i++){
            if(reserveStuNum + 1 === lost[i] || reserveStuNum - 1 === lost[i] || reserveStuNum === lost[i]){
                lost.splice(i, 1);
                break;
            }
        }

    }

    answer = n - lost.length; // 체육복을 빌린 학생들은 수업에 참여할 수 있는 인원에 추가

    return answer;
}