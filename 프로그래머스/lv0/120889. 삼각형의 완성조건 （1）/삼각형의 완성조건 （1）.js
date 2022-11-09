function solution(sides) {
  let a = sides.sort((a,b) => a - b);
    if (a[0] + a[1] <= a[2]){
        return 2
    }
    else
        return 1
}