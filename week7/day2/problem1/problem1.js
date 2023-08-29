/** 블록을 지우는 함수 */
const removeBlocks = (m, n, board) => {
  let copyBoard = [...board];
  let removedBlocks = 0;

  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      // 같은 모양의 블록이 2x2 형태로 4개가 붙어있다면
      if (
        board[i][j] === board[i + 1][j] &&
        board[i][j] === board[i][j + 1] &&
        board[i][j] === board[i + 1][j + 1]
      ) {
        // 각 블록이 아직 지워진적 없다면 지운 블록 개수를 카운트한다.
        if (copyBoard[i][j] !== "0") removedBlocks++;
        if (copyBoard[i + 1][j] !== "0") removedBlocks++;
        if (copyBoard[i][j + 1] !== "0") removedBlocks++;
        if (copyBoard[i + 1][j + 1] !== "0") removedBlocks++;

        // 2x2 블록의 윗줄, 아랫줄 각각에 대해 해당하는 블록을 '0'으로 치환해준다.
        for (let k = 0; k < 2; k++) {
          let temp = [...copyBoard[i + k]];
          temp.splice(j, 2, "0", "0");
          copyBoard[i + k] = [...temp].join("");
        }
      }
    }
  }

  // 블록을 지운 판과 지운 블록의 개수를 반환한다.
  return [copyBoard, removedBlocks];
};

/** 블록이 지워진 후 위에 있는 블록을 아래로 떨어뜨리는 함수 */
const moveBlocks = (m, n, board) => {
  // 행과 열을 서로 바꾼 새 배열을 만든다.
  let newBoard = Array.from({ length: n }, (v, r) => {
    return Array.from({ length: m }, (v, c) => board[c][r]);
  });

  // 블록을 아래로 떨어뜨린다.
  // 행에서 '0'이 아닌 문자열을 뽑고, 그 앞에 모자란 개수만큼 '0'을 붙인다.
  // ex) ['T', '0', '0', 'F', 'A'] -> ['0', '0', 'T', 'F', 'A']
  newBoard.forEach((row, idx) => {
    let temp = row.filter((item) => item !== "0").join("");
    let zero = "0".repeat(m - temp.length);
    newBoard[idx] = (zero + temp).split("");
  });

  // 다시 행과 열을 바꿔서 반환한다.
  Array.from({ length: m }, (v, r) => {
    return Array.from({ length: n }, (v, c) => newBoard[c][r]).join("");
  });
};

function solution(m, n, board) {
  let answer = 0;
  let removedBlocks = -1;

  // 지워진 블록의 개수가 0이 될 때까지 수행한다.
  while (removedBlocks != 0) {
    [board, removedBlocks] = removeBlocks(m, n, board);
    answer += removedBlocks;
    board = moveBlocks(m, n, board);
  }

  return answer;
}
