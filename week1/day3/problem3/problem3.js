function solution(t, p) {
  let answer = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    let str = Number(t.substring(i, i + p.length));
    if (str <= Number(p)) answer++;
  }
  return answer;
}
