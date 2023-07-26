function solution(X, Y) {
  let answer = "";
  X = X.split("");
  Y = Y.split("");

  for (let i = 0; i < 10; i++) {
    const currX = X.filter((x) => Number(x) === i).length;
    const currY = Y.filter((y) => Number(y) === i).length;
    answer += String(i).repeat(Math.min(currX, currY));
  }

  if (answer === "") return "-1";
  if (Number(answer) === 0) return "0";

  return answer
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
