function solution(babbling) {

    var babblingArr = ["aya", "ye", "woo", "ma"];
    var word = "";
    var answer = 0;

    for(var i=0; i<babbling.length; i++) {

        word = babbling[i].toString();

        for(var j=0; j<babblingArr.length; j++) {

            word = word.replaceAll(babblingArr[j], ' ');    

        }


        if( word.trim().length == 0) {
            answer++;
        }

    }


    return answer;
}


// function solution(babbling) {
//   const regexp1 = /(aya|ye|woo|ma)\1+/;
//   const regexp2 = /^(aya|ye|woo|ma)+$/;

//   return babbling.reduce((ans, word) => (
//     !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
//   ), 0);
// }

const babbling = ["aya", "yee", "u", "maa"];

console.log(solution(babbling));