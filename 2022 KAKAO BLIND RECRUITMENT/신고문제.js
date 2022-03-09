// 다른 풀이

function solution(id_list, report, k) {
    report = [...new Set(report)]; //  report = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"]
    const reported = report.map(el => el.split(' ')[1]);  // reported = ["frodo", "frodo, "neo", "neo", "muzi"];
    const reported_final = [];
    const count = new Array(id_list.length).fill(0); //count = [0, 0, 0, 0]
    reported.forEach(element => {                // reported = ["frodo", "frodo, "neo", "neo", "muzi"];
        count[id_list.indexOf(element)]++;         //id_list = ["muzi", "frodo", "apeach", "neo"]
                                                       //count = [1,       2,         0,      2]
    });                                                 //여기서 count는 신고당한 횟수;
    count.forEach((el, i) => {
        if (el >= k) {
            reported_final.push(id_list[i]);       ㅊ
        }
    });
    count.fill(0);                // reported_final = ["frodo", "neo"];  신고 횟수가 2번이라 정지인 사람                      
    report.forEach((el) => {     // id_list = ["muzi", "frodo", "apeach", "neo"]
        el = el.split(' ');      // el = ["muzi frodo"], ["apeach frodo"], ["frodo neo"], ["muzi neo"], ["apeach muzi"]
        if (reported_final.includes(el[1])) { //만약 el[1]을 포함하고있다면 count[]]
            count[id_list.indexOf(el[0])]++;  //  [2, 1, 1, 0]
        }
    });

    return count;
}