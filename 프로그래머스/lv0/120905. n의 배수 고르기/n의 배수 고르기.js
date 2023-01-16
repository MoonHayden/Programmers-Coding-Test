function solution(n, numlist) {

    var answer = numlist.filter(list => (list % n) === 0 )
    
    return answer;
}