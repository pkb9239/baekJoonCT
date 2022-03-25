const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0], input.slice(1));


function solution(N, arr) { 
  let answer = 0;
  for (let i = 0; i < N; i++) {
    let nowS = arr[i]; //현재 단어

    let obj = {}; //빈객체 

    let nowCountC = nowS[0];  //happy에서 h 현재 단어의 앞스펠링
    obj[nowCountC] = true;     // h : true ;
    
    let isGroupWord = true; //그룹 단어가 true 로 설정
    for (let j = 1; j < nowS.length; ++j) { 
      if (nowCountC !== nowS[j]) { //스펠링이 연속하지않을때
        if (obj[nowS[j]]) { // obj{[a]} 이면 
          isGroupWord = false;
        } else { // 스펠링이 연속할땐
          nowCountC = nowS[j]; // 앞 스펠링은 뒤스펠링과 같아야하고 
          obj[nowS[j]] = true;
        }
      }
    }
    if (isGroupWord) {
        answer++;
    }
  }
  console.log(answer);
}
  
