function solution(arrayA, arrayB) {
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);

  const getAnswer = (can, cant) => {
    for (let i = can[0]; i > 0; i--) {
      if (can.every((v) => v % i === 0) && !cant.some((v) => v % i === 0))
        return i;
    }
    return 0;
  };

  return Math.max(getAnswer(arrayA, arrayB), getAnswer(arrayB, arrayA));
}
