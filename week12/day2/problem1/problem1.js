function solution(board) {
  let firstCnt = board.reduce(
    (prev, curr) => (prev += curr.split("").filter((v) => v === "O").length),
    0
  );
  let lastCnt = board.reduce(
    (prev, curr) => (prev += curr.split("").filter((v) => v === "X").length),
    0
  );

  // O와 X의 개수가 2개 이상 차이나거나 X(후공)가 O(선공)보다 개수가 많으면 불가능
  if (Math.abs(firstCnt - lastCnt) > 1 || lastCnt > firstCnt) return 0;

  // 행과 열의 위치를 바꾼 배열
  // ex) O O X  ->  O X .
  //     X O X      O O .
  //     . . O      X X O
  let rowToColArr = Array.from({ length: 3 }, (v, row) =>
    Array.from({ length: 3 }, (v, col) => board[col][row]).join("")
  );
  // 두 대각선 값을 저장한 배열
  // ex) O O X  ->  "OOO", "XO."
  //     X O X
  //     . . O
  let diagonal = [
    board[0][0] + board[1][1] + board[2][2],
    board[0][2] + board[1][1] + board[2][0],
  ];

  let isAvailable = true;

  // 이미 게임의 승부가 났다면
  // 1. 가로, 세로 방향으로 이겼을 때 불가능한 경우를 체크한다.
  for (let i = 0; i < 3; i++) {
    // 선공이 이겼는데 후공의 개수가 선공보다 많거나 같을 때 불가능
    if ((board[i] === "OOO" || rowToColArr[i] === "OOO") && firstCnt <= lastCnt)
      isAvailable = false;
    // 후공이 이겼는데 선공의 개수가 후공의 개수보다 많으면 불가능
    else if (
      (board[i] === "XXX" || rowToColArr[i] === "XXX") &&
      firstCnt > lastCnt
    )
      isAvailable = false;
  }

  // 2. 대각선 방향으로 이겼을 때 불가능한 경우를 체크한다.
  for (let i = 0; i < 2; i++) {
    if (diagonal[i] === "OOO" && firstCnt <= lastCnt) isAvailable = false;
    if (diagonal[i] === "XXX" && firstCnt > lastCnt) isAvailable = false;
  }

  return isAvailable ? 1 : 0;
}
