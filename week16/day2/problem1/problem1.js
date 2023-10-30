const getDivisor = (number) => {
  let result = [];
  for (let i = 1; i * i <= number; i++) {
    if (number % i === 0) result.push([i, number / i]);
  }
  return result;
};

function solution(brown, yellow) {
  let answer = [];
  let divisors = getDivisor(yellow);

  divisors.forEach(([a, b]) => {
    if ((a + 2) * (b + 2) - a * b === brown) {
      answer.push(b + 2);
      answer.push(a + 2);
    }
  });

  return answer;
}
