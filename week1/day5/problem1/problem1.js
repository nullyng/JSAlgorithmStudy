function solution(food) {
  let answer = "";
  let temp = "";

  for (let i = 1; i < food.length; i++) {
    let cnt = Math.floor(food[i] / 2);
    while (cnt--) answer += i;
  }

  answer += "0";
  answer += answer.split("").reverse().join("").substring(1);

  return answer;
}
