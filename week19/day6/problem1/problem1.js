function solution(maps) {
  let answer = -1;
  let dy = [-1, 1, 0, 0];
  let dx = [0, 0, -1, 1];
  let rowLength = maps.length;
  let colLength = maps[0].length;
  let visited = Array.from({ length: rowLength }, () =>
    Array.from({ length: colLength }, () => false)
  );

  const bfs = () => {
    let queue = [];
    queue.push([0, 0, 1]);

    while (queue.length > 0) {
      let [y, x, depth] = queue.shift();

      if (y === rowLength - 1 && x === colLength - 1) return depth;

      for (let i = 0; i < 4; i++) {
        let ny = y + dy[i];
        let nx = x + dx[i];

        if (ny < 0 || ny >= rowLength || nx < 0 || nx >= colLength) continue;
        if (visited[ny][nx] || maps[ny][nx] === 0) continue;

        visited[ny][nx] = true;
        queue.push([ny, nx, depth + 1]);
      }
    }

    return -1;
  };

  answer = bfs();

  return answer;
}
