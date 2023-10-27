let root;

const Find = (x) => {
  if (root[x] === x) return x;
  return (root[x] = Find(root[x]));
};

const Union = (x, y) => {
  x = Find(x);
  y = Find(y);

  if (x !== y) root[y] = x;
};

function solution(n, wires) {
  let answer = n;
  let cut = 0;

  while (cut <= n - 1) {
    root = Array.from({ length: n + 1 }, (_, i) => i);

    for (let i = 0; i < wires.length; i++) {
      if (i === cut) continue;
      Union(wires[i][0], wires[i][1]);
    }

    let r = Find(1);
    let cnt = 1;
    for (let i = 2; i <= n; i++) {
      if (Find(i) === r) cnt++;
    }

    answer = Math.min(answer, Math.abs(cnt - (n - cnt)));
    cut++;
  }

  return answer;
}
