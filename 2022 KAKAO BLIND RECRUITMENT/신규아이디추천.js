function solution(new_id) {
    let answer = '';
    answer = new_id.toLowerCase() // 1단계
        .replace(/[^a-z-_.0-9]/g, '') // 2단계
        .replace(/\.{2,}/g, '.') // 3단계
        .replace(/^\.|\.$/g, '') //4단계
        .substr(0,15) //6단계
        .replace(/\.$/g, '') //6단계
        if (answer.length==0) {
            answer+="a";
        } //5단계
        while (answer.length<=2) {
            answer+=answer[answer.length-1]
        } //7단계
    return answer;
}

function solution(new_id) {

    //1단계
    new_id = new_id.toLowerCase();

    //2단계
    var nouse = ['~','!','@','#','$','%','^','&','*','(',')','=','+','[','{',']','}',':','?',',','<','>','/'];
    var newid0 = [...new_id]; //배열이 편해서...
    var newid1 = newid0.filter(i => !nouse.includes(i));//특수문자제거
    newid1.push("z");

    //3단계
    var newid2 = [];
    for(let i = 0; i < newid1.length; i++) {
        if(newid1[i] === "." && newid1[i+1] === ".") {
            continue;
        } else{ newid2.push(newid1[i])}
    };

    newid2.pop();


    //4단계
    if(newid2[0] === ".") {
        newid2.shift();
    };
    if(newid2[newid2.length-1] === ".") {
        newid2.pop();
    };

    //5단계
    if(newid2.length === 0) {
        newid2.push("a");
    }

    //6단계
    if(newid2.length > 15) {
        newid2.splice(15,1000)
    };

    if(newid2[newid2.length-1] === ".") {
        newid2.pop();
    };

    //7단계
    if(newid2.length === 1 && newid2[0] === "a") {
        newid2.push("a");
        newid2.push("a");
    };

    if(newid2.length === 1) {
        newid2.push(newid2[0]);
        newid2.push(newid2[1]);
    }


    if(newid2.length === 2) {
        newid2.push(newid2[1]);
    }

    var answer = newid2.join('');

    return answer;
}
