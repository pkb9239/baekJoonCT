// function solution(phone_number) {
//     let answer = '';
//     // 번호 뒷 4자리 가져오기
//     let back = phone_number.substr(-4,4);
  
//     // 번호 뒷 4자리를 제외한 앞부분을 가져오기
//     let front = phone_number.substring(0, phone_number.length - 4);

//     // 뒷 4자리를 제외한 앞부분을 * 문자로 변환해주기
//     let result = front.replace(/[0-9]/g, '*');

//     // * 문자로 변환해 준 부분과 뒷자리를 더해서 값을 구하기
//     answer = result + back;

//     return answer;
// }

// 정규식 
function solution(phone_number) {
    return phone_number.replace(/\d(?=\d{4})/g, "*");
  }
  


// repeat 함수사용
// function solution(phone_number) {
//     let answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
//     return answer;
// }

const phone_number = "027778888";

console.log(solution(phone_number));