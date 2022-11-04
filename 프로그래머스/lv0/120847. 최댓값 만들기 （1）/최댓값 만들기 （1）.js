function solution(numbers) {
    var answer = Math.max(...numbers)
    let ddt = numbers.indexOf(answer)
    let second = numbers.splice(ddt, 1)
    let secondBig = Math.max(...numbers)
    let a = answer * secondBig
    return a;
}