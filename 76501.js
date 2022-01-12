function solution(absl, signs) {
    var answer = absl.reduce((acc, curr, i) => {
        return acc + (curr * (signs[i] ? 1 : -1))
    }, 0);
    
    return answer;
}
