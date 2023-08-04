const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, V] = input[0].trim().split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, (v, i) => []);

for (let i = 1; i <= M; i++) {
  const [from, to] = input[i].trim().split(" ");
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach((node) => {
  node.sort((a, b) => a - b);
});

let visited = new Array(N + 1).fill(0);
let resultOfDFS = [];

function DFS(node) {
  resultOfDFS.push(node);
  for (let i = 0; i < graph[node].length; i++) {
    let nextNode = graph[node][i];
    if (visited[nextNode]) continue;
    visited[nextNode] = true;
    DFS(nextNode);
  }
}

visited[V] = true;
DFS(V);
console.log(resultOfDFS.join(" "));

visited.fill(0);
let resultOfBFS = [];

function BFS(node) {
  let queue = [node];
  visited[node] = true;

  while (queue.length) {
    let currNode = queue.shift();
    resultOfBFS.push(currNode);

    for (let i = 0; i < graph[currNode].length; i++) {
      let nextNode = graph[currNode][i];
      if (visited[nextNode]) continue;
      visited[nextNode] = true;
      queue.push(nextNode);
    }
  }
}

BFS(V);
console.log(resultOfBFS.join(" "));
