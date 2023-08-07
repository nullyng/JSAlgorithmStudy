function solution(dartResult) {
  let totalScore = 0;
  let prevScore = 0;
  let currScore = 0;

  for (let i = 0; i < dartResult.length; i++) {
    switch (dartResult[i]) {
      case "S":
        break;
      case "D":
        currScore *= currScore;
        break;
      case "T":
        currScore *= currScore * currScore;
        break;
      case "*":
        prevScore *= 2;
        currScore *= 2;
        break;
      case "#":
        currScore *= -1;
        break;
      default:
        totalScore += prevScore;
        prevScore = currScore;
        if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
          currScore = 10;
          i++;
        } else {
          currScore = Number(dartResult[i]);
        }
    }
  }

  totalScore += prevScore + currScore;
  return totalScore;
}
