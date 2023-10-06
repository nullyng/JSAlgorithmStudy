const bfs = (islands, maps) => {
  let rowLength = maps.length;
  let colLength = maps[0].length;
  let dy = [-1, 1, 0, 0];
  let dx = [0, 0, -1, 1];
  let visited = Array.from({ length: rowLength }, () =>
    Array.from({ length: maps[0].colLength }, () => false)
  );
  let result = [];

  // 각 무인도에 대해 연결된 섬들을 탐색하며 숫자의 합을 구한다.
  islands.forEach(([y, x]) => {
    // 이미 방문한 곳이라면 더이상 탐색하지 않는다.
    if (!visited[y][x]) {
      let queue = [];
      let sum = +maps[y][x];

      queue.push([y, x]);
      visited[y][x] = true;

      while (queue.length > 0) {
        [y, x] = queue.shift();

        for (let i = 0; i < 4; i++) {
          let ny = y + dy[i];
          let nx = x + dx[i];

          if (ny < 0 || ny >= rowLength || nx < 0 || nx >= colLength) continue;
          if (visited[ny][nx] || maps[ny][nx] === "X") continue;

          visited[ny][nx] = true;
          queue.push([ny, nx]);
          sum += +maps[ny][nx];
        }
      }

      result.push(sum);
    }
  });

  return result;
};

function solution(maps) {
  let islands = [];

  // 무인도에 해당하는 칸을 배열에 저장한다.
  maps.forEach((map, row) => {
    map.split("").forEach((v, col) => {
      if (v !== "X") islands.push([row, col]);
    });
  });

  // 무인도가 없다면 -1 반환
  if (islands.length === 0) return [-1];

  let answer = bfs(islands, maps);

  return answer.sort((a, b) => a - b);
}
