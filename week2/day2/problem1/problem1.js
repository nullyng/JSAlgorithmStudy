function solution(number) {
  let answer = 0;
  let selected = [];

  const makeComb = (cnt, idx) => {
    if (cnt === 3) {
      answer += selected.reduce((prev, curr) => prev + curr, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = idx; i < number.length; i++) {
      selected[cnt] = number[i];
      makeComb(cnt + 1, i + 1);
    }
  };

  makeComb(0, 0);

  return answer;
}
