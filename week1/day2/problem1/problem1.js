function solution(n, m, section) {
  let answer = 0;
  let maxRange = -1;
  
  section.forEach(range => {
      if(range > maxRange) {
          answer++;
          maxRange = range+m-1;
      }
  })
  
  return answer;
}