function solution(n) {
  let fibo = new Array(n + 1).fill(0);

  fibo[1] = 1;
  fibo[2] = 1;
  for (let i = 3; i <= n; i++) fibo[i] = (fibo[i - 2] + fibo[i - 1]) % 1234567;

  return fibo[n];
}
