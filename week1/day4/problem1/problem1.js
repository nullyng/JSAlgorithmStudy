function solution(s) {
  let currChar = s[0];
  let answer = 0;
  let currCharCnt = 1;
  let etcCnt = 0;

  for (let i = 1; i < s.length; i++) {
    if (currCharCnt == etcCnt) {
      currChar = s[i];
      currCharCnt = 1;
      etcCnt = 0;
      answer++;
      continue;
    }

    if (currChar === s[i]) currCharCnt++;
    else etcCnt++;
  }

  return answer + 1;
}
