function solution(data, col, row_begin, row_end) {
  let sumOfRest = [];

  // 정해진 방법에 따라 튜플을 정렬한다.
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) return b[0] - a[0];
    return a[col - 1] - b[col - 1];
  });

  // 모든 튜플에 대해 각 컬럼의 값을 i로 나눈 나머지들의 합을 sumOfRest에 저장한다.
  for (let i = row_begin - 1; i < row_end; i++) {
    sumOfRest.push(data[i].reduce((prev, curr) => prev + (curr % (i + 1)), 0));
  }

  // 모든 나머지들의 합을 누적하여 bitwise XOR 계산한다.
  for (let i = 1; i < sumOfRest.length; i++) {
    sumOfRest[0] ^= sumOfRest[i];
  }

  return sumOfRest[0];
}
