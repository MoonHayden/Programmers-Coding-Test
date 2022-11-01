function solution(array, height) {
    var answer = array.filter(a => a > height).length;

    return answer;
}