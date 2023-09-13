function solution(n) {
  let dy = [1, 0, -1]; // 아래, 오른쪽, 대각선 왼쪽 위
  let dx = [0, 1, -1];

  let size = (n * (n + 1)) / 2;
  let arr = Array.from(Array(n), () => new Array(n).fill(0));
  let [y, x, d, number] = [0, 0, 0, 1];

  while (arr[y][x] === 0) {
    arr[y][x] = number++;

    let ny = y + dy[d];
    let nx = x + dx[d];

    if (ny >= n || nx >= n || arr[ny][nx] !== 0) {
      d = (d + 1) % 3;
      ny = y + dy[d];
      nx = x + dx[d];
    }

    y = ny;
    x = nx;
  }

  return arr.flat().filter((item) => item !== 0);
}
