const bfs = (sy, sx, rowSize, colSize, board) => {
  let queue = [];
  let dy = [-1, 0, 1, 0];
  let dx = [0, -1, 0, 1];
  let visited = Array.from({ length: rowSize }, () =>
    Array.from({ length: colSize }, () => false)
  );

  queue.push([sy, sx, 0]);
  visited[sy][sx] = true;

  while (queue.length > 0) {
    let [y, x, moveCnt] = queue.shift();

    if (board[y][x] === "G") return moveCnt;

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      while (
        ny >= 0 &&
        ny < rowSize &&
        nx >= 0 &&
        nx < colSize &&
        board[ny][nx] !== "D"
      ) {
        ny += dy[i];
        nx += dx[i];
      }

      ny -= dy[i];
      nx -= dx[i];

      if (visited[ny][nx] || (ny === y && nx === x)) continue;

      queue.push([ny, nx, moveCnt + 1]);
      visited[ny][nx] = true;
    }
  }

  return -1;
};

function solution(board) {
  let rowSize = board.length;
  let colSize = board[0].length;
  let sy, sx;

  board.forEach((row, rIdx) =>
    row.split("").forEach((item, cIdx) => {
      if (item === "R") {
        sy = rIdx;
        sx = cIdx;
      }
    })
  );

  return bfs(sy, sx, rowSize, colSize, board);
}
