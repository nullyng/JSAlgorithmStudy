const dijkstra = (N, graph) => {
  let queue = [];
  let dist = new Array(N + 1).fill(Infinity);

  queue.push([1, 0]);
  dist[1] = 0;

  while (queue.length) {
    let currNode = queue[0][0];
    let currCost = queue[0][1];
    queue.shift();

    if (dist[currNode] < currCost);

    graph[currNode].forEach(([nextNode, nextCost]) => {
      nextCost += currCost;
      if (nextCost < dist[nextNode]) {
        dist[nextNode] = nextCost;
        queue.push([nextNode, nextCost]);
      }
    });
  }

  return dist;
};

function solution(N, road, K) {
  let answer = 0;
  let graph = Array.from(Array(N + 1), () => []);

  road.forEach(([a, b, c]) => {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  });

  let dist = dijkstra(N, graph);

  dist.forEach((cost) => {
    if (cost <= K) answer++;
  });

  return answer;
}
