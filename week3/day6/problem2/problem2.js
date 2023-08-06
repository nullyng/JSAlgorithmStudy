const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [inp1, inp2, ...vip] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +inp1;
const M = +inp2;

let fibo = new Array(N + 1).fill(0);

fibo[0] = fibo[1] = 1;

for (let i = 2; i <= N; i++) fibo[i] = fibo[i - 1] + fibo[i - 2];

let answer = 1;
let last = 0;

for (let i = 0; i < M; i++) {
  answer *= fibo[vip[i] - last - 1];
  last = vip[i];
}

console.log(answer * fibo[N - last]);
