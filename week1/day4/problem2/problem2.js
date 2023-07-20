function solution(k, score) {
  let answer = [];
  let honor = [];

  score.forEach((score) => {
    honor.push(score);
    honor.sort((a, b) => a - b);
    if (honor.length > k) honor.shift();
    answer.push(honor[0]);
  });

  return answer;
}
