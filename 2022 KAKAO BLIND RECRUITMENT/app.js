function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    // report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
    // reports = [ ['muzi', 'frodo'], ['apeach', 'frodo'], ['frodo', 'neo'], ['muzi', 'neo'],['apeach', 'muzi'] ]
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1);
    }
    //counts = Map(3) {'frodo' => 2, 'neo' => 2, 'muzi' => 1} 신고 받으사람 횟수
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1);
        }
    }
    //good = Map(3) {'muzi' => 2, 'apeach' => 1, 'frodo' => 1} 신고한 사람 횟수

    let answer = id_list.map(a=>good.get(a)||0);
    return answer;
}

