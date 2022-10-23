// 서울에서 김서방 찾기

// indexOf메서드 사용

function solution(seoul) {
    let answer = '';
    const pos = seoul.indexOf("Kim");
    return answer =`김서방은 ${pos}에 있다`
}

const seoul = ["Jane", "Kim"];

console.log(solution(seoul));