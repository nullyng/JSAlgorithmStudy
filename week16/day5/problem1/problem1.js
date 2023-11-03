function solution(numbers) {
  let answer = numbers
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("");
  return Number(answer) === 0 ? "0" : answer;
}
