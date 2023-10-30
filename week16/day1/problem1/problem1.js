function solution(word) {
  let answer = 0;
  let alphabet = ["A", "E", "I", "O", "U"];
  let index = -1;

  const findWordIdx = (str) => {
    index++;
    if (str === word) {
      answer = index;
      return;
    }
    if (str.length >= 5) return;
    for (let i = 0; i < 5; i++) findWordIdx(str + alphabet[i]);
  };

  findWordIdx("");

  return answer;
}
