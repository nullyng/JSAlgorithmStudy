function solution(rows, columns, queries) {
  let answer = [];
  // 1씩 증가하는 배열 만들기
  let matrix = [...Array(rows)].map((v, r) =>
    [...Array(columns)].map((v, c) => r * columns + (c + 1))
  );

  const rotate = (r1, c1, r2, c2) => {
    let temp = matrix[r1][c1];
    let minValue = temp;

    // 좌
    for (let i = r1; i < r2; i++) {
      matrix[i][c1] = matrix[i + 1][c1];
      minValue = Math.min(minValue, matrix[i][c1]);
    }
    // 하
    for (let i = c1; i < c2; i++) {
      matrix[r2][i] = matrix[r2][i + 1];
      minValue = Math.min(minValue, matrix[r2][i]);
    }
    // 우
    for (let i = r2; i > r1; i--) {
      matrix[i][c2] = matrix[i - 1][c2];
      minValue = Math.min(minValue, matrix[i][c2]);
    }
    // 상
    for (let i = c2; i > c1; i--) {
      matrix[r1][i] = matrix[r1][i - 1];
      minValue = Math.min(minValue, matrix[r1][i]);
    }

    matrix[r1][c1 + 1] = temp;
    return minValue;
  };

  queries.forEach((query) => {
    answer.push(rotate(query[0] - 1, query[1] - 1, query[2] - 1, query[3] - 1));
  });

  return answer;
}
