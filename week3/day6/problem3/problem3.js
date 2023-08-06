const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [str, bomb] = fs.readFileSync(filePath).toString().trim().split("\n");

let stack = [];
let top = 0;

for (let i = 0; i < str.length; i++) {
  stack.push(str[i]);
  top = str[i];
  if (top === bomb[bomb.length - 1]) {
    let last = stack.slice(-bomb.length);
    if (last.join("") === bomb) stack.splice(-bomb.length);
  }
}

console.log(stack.length ? stack.join("") : "FRULA");
