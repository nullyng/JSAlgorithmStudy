function solution(n, k) {
  let kNumber = n.toString(k).split("0").map(Number);

  const isPrime = (number) => {
    if (number <= 1) return false;
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  };

  let answer = kNumber.filter((num) => isPrime(num));

  return answer.length;
}
