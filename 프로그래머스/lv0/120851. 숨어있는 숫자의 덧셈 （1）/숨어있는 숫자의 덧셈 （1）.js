function solution(my_string) {
    let arr = my_string.split('')
    let answer = 0
    arr.forEach((data)=> {
        if(isNaN(data)===false){
        answer += Number(data)
        }
    }) 
    
    return answer;
}