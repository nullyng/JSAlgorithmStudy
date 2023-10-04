const bfs = (sy, sx, exitChar, row, col, maps) => {
  let queue = [];
  let visited = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => false)
  );
  let dy = [-1, 1, 0, 0];
  let dx = [0, 0, -1, 1];
  let dist = Infinity;

  queue.push([sy, sx, 0]);
  visited[sy][sx] = true;

  while (queue.length > 0) {
    let [y, x, d] = queue.shift();

    if (maps[y][x] === exitChar) dist = Math.min(dist, d);

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if (ny < 0 || ny >= row || nx < 0 || nx >= col || visited[ny][nx])
        continue;
      if (maps[ny][nx] === "X") continue;

      visited[ny][nx] = true;
      queue.push([ny, nx, d + 1]);
    }
  }

  return dist;
};

function solution(maps) {
  var answer = 0;
  let rowLength = maps.length;
  let colLength = maps[0].length;
  let leverY, leverX;

  maps.forEach((map, row) => {
    map.split("").forEach((v, col) => {
      if (v === "S") [startY, startX] = [row, col];
      else if (v === "L") [leverY, leverX] = [row, col];
      else if (v === "E") [exitY, exitX] = [row, col];
    });
  });

  // 레버 위치에서 출발해서 시작점까지의 최소 거리와 도착점까지의 최소 거리를 구해서 더한다.
  let distToStart = bfs(leverY, leverX, "S", rowLength, colLength, maps);
  let distToExit = bfs(leverY, leverX, "E", rowLength, colLength, maps);

  if (distToStart === Infinity || distToExit === Infinity) return -1;
  else return distToStart + distToExit;
}
