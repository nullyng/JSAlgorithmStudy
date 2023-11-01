const getPrime = (n) => {
  let result = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  for (let i = 2; i * i <= n; i++) {
    if (result[i]) {
      for (let j = i * i; j <= n; j += i) {
        result[j] = false;
      }
    }
  }
  return result;
};

function solution(numbers) {
  let answer = new Set();
  let length = numbers.length;
  // 소수 판별은 카드로 만들 수 있는 최대 수까지만 한다.
  let isPrime = getPrime(
    +numbers
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
  // 현재 숫자 카드를 사용했는지 여부를 저장하는 배열
  let flag = Array(length).fill(false);

  // 재귀적으로 호출하며 숫자를 만든다.
  const makeNumbers = (number) => {
    if (number.length > 0) {
      // 현재 숫자가 소수라면 Set에 이를 추가한다.
      if (isPrime[+number.join("")]) answer.add(+number.join(""));
    }

    if (number.length >= length) return;

    for (let i = 0; i < length; i++) {
      // 이미 사용한 카드라면 넘어간다.
      if (flag[i]) continue;
      flag[i] = true;
      number.push(numbers[i]);
      makeNumbers(number);
      number.pop();
      flag[i] = false;
    }
  };

  makeNumbers([]);

  return answer.size;
}
