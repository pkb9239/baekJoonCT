// 핸드폰 번호 가리기 

function solution(phone_number) {
    let answer = '';
    return answer = phone_number.slice(0, -4).replace(/[0-9]/g, '*') + phone_number.slice(-4);
}

// slice메서드를 써서 코드를 한 줄로 줄여봤다

// 인덱스 0부터 마지막 4자리 전까지 slice 한 후, replace 로 그 부분을 * 로 바꾸어 준 뒤 
// 뒤에 마지막 4자리를 다시 slice 해서 붙여 넣는 방식으로 코드를 작성했다.


const phone_number = "01033334444";

console.log(solution(phone_number));