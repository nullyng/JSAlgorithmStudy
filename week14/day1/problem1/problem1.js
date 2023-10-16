function solution(k, d) {
  let answer = ~~(d / k) + 1;
  for (let a = 0; a <= d; a += k) answer += ~~((d ** 2 - a ** 2) ** 0.5 / k);
  return answer;
}
