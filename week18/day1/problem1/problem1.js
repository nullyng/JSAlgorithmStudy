function solution(n) {
  let answer = 0;
  let board = new Array(n).fill(0);

  const dfs = (row) => {
    if (row === n) answer++;
    else {
      for (let col = 0; col < n; col++) {
        board[row] = col;
        // 현재 배치가 가능한 경우에만 재귀함수를 호출한다.
        if (isAvailable(row)) dfs(row + 1);
      }
    }
  };

  const isAvailable = (row) => {
    for (let i = 0; i < row; i++) {
      // 이전 행에서 같은 열에 배치한 퀸이 있는지 확인한다.
      if (board[i] === board[row]) return false;
      // 같은 대각선 상에 배치한 퀸이 있는지 확인한다.
      if (Math.abs(i - row) === Math.abs(board[i] - board[row])) return false;
    }
    return true;
  };

  for (let i = 0; i < n; i++) {
    board[0] = i;
    dfs(1);
  }

  return answer;
}
