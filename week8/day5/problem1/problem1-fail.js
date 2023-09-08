function solution(numbers) {
  let answer = [];

  // 수를 증가시키면서 XOR 연산, 1의 개수가 몇 개인지 세아리기
  numbers.forEach((x) => {
    let number = x;

    while (++number) {
      let xor = x ^ number;
      let diffCount = xor
        .toString(2)
        .split("")
        .reduce((prev, curr) => {
          if (curr === "1") return prev + 1;
          else return prev;
        }, 0);

      if (diffCount <= 2) {
        answer.push(number);
        break;
      }
    }
  });

  return answer;
}
