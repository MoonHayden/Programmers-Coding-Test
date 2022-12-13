function solution(array) {
    let arr = array.sort(function(a, b){
        return a - b
    })
    let answer = arr[Math.floor(arr.length/2)]

    return answer;
}