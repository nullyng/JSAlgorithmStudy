function solution(answers) {
  let result = [];
  let supoja1 = "12345".split("");
  let supoja2 = "21232425".split("");
  let supoja3 = "3311224455".split("");
  let answer1 = 0,
    answer2 = 0,
    answer3 = 0;
  let maxCount = 0;

  answers.forEach((answer, index) => {
    if (answer === Number(supoja1[index % 5])) answer1++;
    if (answer === Number(supoja2[index % 8])) answer2++;
    if (answer === Number(supoja3[index % 10])) answer3++;
    maxCount = Math.max(answer1, Math.max(answer2, answer3));
  });

  if (answer1 === maxCount) result.push(1);
  if (answer2 === maxCount) result.push(2);
  if (answer3 === maxCount) result.push(3);

  return result;
}
