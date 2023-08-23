function solution(n, t, m, p) {
  let answer = "";
  let number = 0;

  // t*m개를 말할 수 있을만큼 문자열을 만든다.
  while (t * m > answer.length) {
    answer += (number++).toString(n);
  }

  // t*m개만 남긴다.
  answer = answer.slice(0, t * m);

  // 튜브의 순서에 말해야 할 숫자만 남기고 모든 문자를 대문자로 바꾼다.
  answer = answer
    .split("")
    .filter((number, idx) => {
      return idx % m === p - 1;
    })
    .join("")
    .toUpperCase();

  return answer;
}
