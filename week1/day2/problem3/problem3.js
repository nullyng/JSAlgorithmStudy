function solution(cards1, cards2, goal) {
  let index = 0;

  while (index < goal.length) {
    if (goal[index] === cards1[0]) {
      cards1.shift();
      index++;
    } else if (goal[index] === cards2[0]) {
      cards2.shift();
      index++;
    } else break;
  }

  return index === goal.length ? "Yes" : "No";
}
