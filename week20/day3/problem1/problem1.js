function solution(n) {
  let answer = 1;

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    let b = Math.floor(Math.sqrt(2 * n + i ** 2 - i));
    if (b * (b + 1) === 2 * n + i ** 2 - i) answer++;
  }

  return answer;
}
