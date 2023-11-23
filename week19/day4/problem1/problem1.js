function solution(board) {
  // board의 값이 전부 0인 경우 0을 반환한다.
  let one = 0;
  board.forEach((row) =>
    row.forEach((col) => {
      if (col === 1) one++;
    })
  );
  if (one === 0) return 0;

  let answer = 1;
  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[i].length; j++) {
      if (board[i][j] > 0) {
        board[i][j] =
          Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
        answer = Math.max(answer, board[i][j]);
      }
    }
  }
  return answer ** 2;
}
