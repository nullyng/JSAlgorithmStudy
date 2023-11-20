function getTheNumberOfOne(num) {
  return num
    .toString(2)
    .split("")
    .filter((v) => v === "1").length;
}

function solution(n) {
  let answer = 0;
  let one = getTheNumberOfOne(n);

  while (n++) {
    if (getTheNumberOfOne(n) === one) {
      answer = n;
      break;
    }
  }

  return answer;
}
