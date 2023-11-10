function getGCD(a, b) {
  if (b === 0) return a;
  return a > b ? getGCD(b, a % b) : getGCD(a, b % a);
}

function solution(arr) {
  let answer = (arr[0] * arr[1]) / getGCD(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    answer = (answer * arr[i]) / getGCD(answer, arr[i]);
  }
  return answer;
}
