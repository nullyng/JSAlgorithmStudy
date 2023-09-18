function solution(n, words) {
  let answer = [0, 0];
  let wordSet = new Set();
  let prevWord = words[0][0];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (wordSet.has(word) || prevWord !== word[0]) {
      answer = [(i % n) + 1, Math.floor(i / n) + 1];
      break;
    } else {
      wordSet.add(word);
      prevWord = word[word.length - 1];
    }
  }

  return answer;
}
