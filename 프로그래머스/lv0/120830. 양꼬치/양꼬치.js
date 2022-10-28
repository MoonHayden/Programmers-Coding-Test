function solution(n, k) {
    var answer = (n * 12000) + (k * 2000)
    discount = Math.floor(n / 10)
    if (discount >= 1) {
        dis = discount * 2000;
        answer -= dis
    }
    return answer;
}