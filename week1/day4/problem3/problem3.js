function getDivisorCnt(number) {
  let divisor = 0;

  for (let i = 1; i * i <= number; i++) {
    if (i * i == number) divisor++;
    else if (number % i == 0) divisor += 2;
  }

  return divisor;
}

function solution(number, limit, power) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    let divisorCnt = getDivisorCnt(i);
    if (divisorCnt > limit) answer += power;
    else answer += divisorCnt;
  }

  return answer;
}
