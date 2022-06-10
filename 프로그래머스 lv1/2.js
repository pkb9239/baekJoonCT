//완주하지 못한 선수


// function solution(participant, completion) {
//     let answer = '';    
//     participant = participant.sort();
//     completion = completion.sort();
//     console.log(participant,completion );
//     for (let i = 0; i < participant.length; i++) {
//         if (participant[i] !== completion[i]) {
//             answer = participant[i];
//             return answer;
//         }
//     }
// }


// Map을 이용한 풀이
function solution(participant, completion) {
    let answer = '';
    let p1 = new Map();
    for (let i = 0; i < participant.length; i++) { // 먼저 participant를 Map을 이용하여 key, value값으로 정리하여 p1에 저장한다.
        if (p1.has(participant[i])) p1.set(participant[i], p1.get(participant[i]) + 1);
        else p1.set(participant[i], 1);          
    }
    for (let i = 0; i < completion.length; i++) { // p1을 completion 요소로 for문을 돌려서   
        if (p1.has(completion[i])) {              
            p1.set(completion[i], p1.get(completion[i])-1); // p1이 completion의 요소(key)를 가지고 있으면(value) 빼주고  
        };
        if (p1.get(completion[i]) === 0) p1.delete(completion[i]); // value값이 0이면 요소자체(key, value)를 삭제해준다.
    }
    // 1. const a = p1[Symbol.iterator]();  => 이터러블 객체를 문자열로 바꾸는 방법
    //    answer = a.next().value[0];       
    
    
    // 2. answer = String([...p1.keys()]);


    // 3.
    for(let [k, v] of p1) { // => 이터러블 객체 순회하여 문자열로 바꾸는 방법
        if(v > 0) answer = k
    }
    return answer;
}

const participant = ["marina", "josipa", "nikola", "vinko", "filipa"]	
const completion =["josipa", "filipa", "marina", "nikola"]
console.log(solution(participant, completion));