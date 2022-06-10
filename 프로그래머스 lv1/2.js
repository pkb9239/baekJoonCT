//완주하지 못한 선수

function solution(participant, completion) {
    let answer = '';
    participant = participant.sort();
    completion = completion.sort();
    console.log(participant,completion );
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            answer = participant[i];
            return answer;
        }
    }
}


const participant = ["mislav", "stanko", "mislav", "ana"]
const completion =["stanko", "ana", "mislav"]
console.log(solution(participant, completion));