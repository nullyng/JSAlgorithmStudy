function solution(land) {
  let answer = 0;
  let row = land.length;
  let col = land[0].length;
  let visited = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => false)
  );
  let dy = [-1, 1, 0, 0];
  let dx = [0, 0, -1, 1];
  let oil = new Array(col).fill(0);

  const bfs = (y, x) => {
    let queue = [];
    let set = new Set();
    let oilCnt = 1;

    queue.push([y, x]);

    while (queue.length > 0) {
      [y, x] = queue.pop();
      visited[y][x] = true;
      set.add(x);

      for (let i = 0; i < 4; i++) {
        let ny = y + dy[i];
        let nx = x + dx[i];

        if (ny < 0 || ny >= row || nx < 0 || nx >= col) continue;
        if (visited[ny][nx] || !land[ny][nx]) continue;
        queue.push([ny, nx]);
        visited[ny][nx] = true;
        oilCnt++;
      }
    }

    set.forEach((c) => (oil[c] += oilCnt));
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (visited[i][j] || !land[i][j]) continue;
      bfs(i, j);
    }
  }

  oil.forEach((o) => {
    answer = Math.max(answer, o);
  });

  return answer;
}
