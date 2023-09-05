const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input1.txt";
const [mn, ...picture] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// 입력 처리
const [m, n] = mn.split(" ");
for (let i = 0; i < m; i++) {
  picture[i] = picture[i].split(" ").map(Number);
}
// 입력 처리 끝

const bfs = (y, x, m, n, dy, dx, picture, visited) => {
  const queue = [];
  let areaSize = 0;

  queue.push([y, x]);
  visited[y][x] = true;

  while (queue.length > 0) {
    y = queue[0][0];
    x = queue[0][1];
    queue.shift();

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if (ny < 0 || ny >= m || nx < 0 || nx >= n || visited[ny][nx]) continue;
      if (picture[ny][nx] === picture[y][x]) {
        queue.push([ny, nx]);
        visited[ny][nx] = true;
        areaSize++;
      }
    }
  }

  return areaSize + 1;
};

const solution = (m, n, picture) => {
  let answer = [0, 0];
  const visited = Array.from({ length: m }, (v, i) => {
    return Array.from({ length: n }, (v, i) => false);
  });

  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (picture[i][j] === 0 || visited[i][j]) continue;
      answer[0]++;
      answer[1] = Math.max(
        answer[1],
        bfs(i, j, m, n, dy, dx, picture, visited)
      );
    }
  }

  console.log(answer);
};

solution(m, n, picture);
