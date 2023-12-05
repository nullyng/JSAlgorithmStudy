function solution(n, k) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let factorial = arr.reduce((prev, curr) => prev * curr, 1);
  const answer = [];

  k--;
  while (n > 0) {
    factorial /= n;
    let currIdx = Math.floor(k / factorial);
    answer.push(arr[currIdx]);
    arr = arr.filter((_, i) => i !== currIdx);
    k %= factorial;
    n--;
  }

  return answer;
}
