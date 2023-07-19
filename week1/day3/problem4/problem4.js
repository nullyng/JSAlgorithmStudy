function solution(s) {
  let answer = [];
  let alphabet = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in alphabet) {
      answer.push(i - alphabet[s[i]]);
      alphabet[s[i]] = i;
    } else {
      answer.push(-1);
      alphabet[s[i]] = i;
    }
  }

  return answer;
}
