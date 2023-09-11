function solution(arr) {
  // 전체를 0으로 압축할 수 있다면 0의 개수 1개, 1의 개수 0개
  if (arr.every((row) => row.every((cell) => cell === 0))) return [1, 0];
  if (arr.every((row) => row.every((cell) => cell === 1))) return [0, 1];

  let zeroCnt = 0;
  let oneCnt = 0;

  const divideConquer = (sy, sx, n) => {
    let flag = true;

    for (let i = sy; i < sy + n; i++) {
      for (let j = sx; j < sx + n; j++) {
        if (arr[sy][sx] !== arr[i][j]) flag = false;
      }
    }

    if (flag) {
      if (arr[sy][sx] === 0) zeroCnt++;
      else oneCnt++;
    } else {
      divideConquer(sy, sx, n / 2);
      divideConquer(sy + n / 2, sx, n / 2);
      divideConquer(sy, sx + n / 2, n / 2);
      divideConquer(sy + n / 2, sx + n / 2, n / 2);
    }
  };

  divideConquer(0, 0, arr.length);

  return [zeroCnt, oneCnt];
}
