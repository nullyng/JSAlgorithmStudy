function solution(grid) {
  let answer = [];
  let row = grid.length;
  let col = grid[0].length;
  let visited = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => new Array(3).fill(false))
  );

  let dy = [1, -1, 0, 0];
  let dx = [0, 0, 1, -1];

  // 각 방향에서 빛을 쐈을 때 S, L, R에 따른 이동 방향에 해당하는 dy, dx 인덱스
  let direction = [
    [0, 2, 3], // 아래
    [1, 3, 2], // 위
    [2, 1, 0], // 오른쪽
    [3, 0, 1], // 왼쪽
  ];

  for (let y = 0; y < row; y++) {
    for (let x = 0; x < col; x++) {
      for (let d = 0; d < 4; d++) {
        // 특정한 위치로 같은 방향의 빛을 쏜 적이 있다 -> 이미 확인한 사이클
        if (visited[y][x][d]) continue;

        let cycleLength = 0;
        let ny = y,
          nx = x,
          nd = d;

        // 사이클의 경로를 전부 방문할 때까지
        while (!visited[ny][nx][nd]) {
          // 현재 사이클의 경로 길이를 +1
          cycleLength++;
          visited[ny][nx][nd] = true;

          // 미리 정의한 배열을 통해 현재 칸의 문자에 따라 방향을 전환하여 이동한다.
          if (grid[ny][nx] === "S") {
            nd = direction[nd][0];
          } else if (grid[ny][nx] === "L") {
            nd = direction[nd][1];
          } else {
            nd = direction[nd][2];
          }

          ny += dy[nd];
          nx += dx[nd];

          if (ny === row) ny = 0;
          else if (ny < 0) ny = row - 1;

          if (nx === col) nx = 0;
          else if (nx < 0) nx = col - 1;
        }

        answer.push(cycleLength);
      }
    }
  }

  // 오름차순으로 정렬해서 반환
  return answer.sort((a, b) => a - b);
}
