function solution(board, moves) {
  let answer = 0;
  let basket = [];
  let dollOfBoard = [];
  let sizeOfBoard = board.length;

  // 각 열에 있는 인형들을 배열로 뽑아낸다.
  // dollOfBoard[0]: 0번 열에 있는 인형들
  // dollOfBoard[1]: 1번 열에 있는 인형들
  // ...
  for (let i = 0; i < sizeOfBoard; i++) {
    let arr = [];
    for (let j = 0; j < sizeOfBoard; j++) {
      if (board[j][i] > 0) arr.push(board[j][i]);
    }
    dollOfBoard.push(arr);
  }

  moves.forEach((move) => {
    let doll = dollOfBoard[move - 1][0];
    if (doll) {
      // 인형 뽑은 후 배열에서 제거
      dollOfBoard[move - 1].shift();
      // 만약 바구니에 같은 모양의 인형이 쌓였다면
      if (basket.at(-1) === doll) {
        answer += 2; // 정답을 2만큼 증가시키고
        basket.pop(); // 바구니에서 원래 들어있던 인형 제거
      } else basket.push(doll); // 그렇지 않으면 바구니에 인형 넣기
    }
  });

  return answer;
}
