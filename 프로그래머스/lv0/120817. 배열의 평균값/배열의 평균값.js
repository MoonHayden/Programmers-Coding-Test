function solution(numbers) {
    const arrSum = numbers.reduce(function add (sum, currValue){
        return sum + currValue;
    }, 0)
    answer = arrSum / numbers.length
    return answer;
}