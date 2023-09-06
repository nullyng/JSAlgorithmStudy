function solution(n, left, right) {
  let answer = [];
  let arr = Array.from({ length: n }, (v, row) => {
    return Array.from({ length: n }, (v, col) => {
      return row < col ? col + 1 : row + 1;
    });
  });

  arr.forEach((item) => item.forEach((v) => answer.push(v)));
  return answer.slice(left, right + 1);
}
