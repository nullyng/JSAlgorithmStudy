function hanoi(n, from, rest, to) {
  if (n === 1) return [[from, to]];

  let result = [];
  result = result.concat(hanoi(n - 1, from, to, rest));
  result.push([from, to]);
  result = result.concat(hanoi(n - 1, rest, from, to));
  return result;
}

function solution(n) {
  return hanoi(n, 1, 2, 3);
}
