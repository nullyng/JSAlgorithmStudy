// 최대 힙을 활용한 내림차순 우선순위 큐
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  empty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.heap[0];
  }

  push(data) {
    this.heap.push(data);

    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = ~~((i - 1) / 2);
      if (this.heap[parent] > this.heap[i]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  pop() {
    if (this.empty()) return;

    const value = this.peek();
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];

    this.heap.pop();
    this._heapify();
    return value;
  }

  _heapify() {
    const x = this.peek();
    const n = this.heap.length;
    let curr = 0;

    while (2 * curr + 1 < n) {
      const leftChild = curr * 2 + 1;
      const rightChild = leftChild + 1;
      const biggerChild =
        rightChild < n && this.heap[rightChild] > this.heap[leftChild]
          ? rightChild
          : leftChild;
      if (x < this.heap[biggerChild]) {
        [this.heap[curr], this.heap[biggerChild]] = [
          this.heap[biggerChild],
          this.heap[curr],
        ];
        curr = biggerChild;
      } else break;
    }
  }
}

function solution(n, k, enemy) {
  let answer = 0;
  const pq = new PriorityQueue();

  for (let i = 0; i < enemy.length; i++) {
    // 남은 병사의 수가 적의 수보다 적고 무적권을 다 썼을 때 종료한다.
    if (n < enemy[i] && k == 0) break;
    // 우선순위 큐에 적의 수를 push한다.
    pq.push(enemy[i]);
    // 남은 병사의 수가 적의 수보다 적을 때
    if (n < enemy[i]) {
      // 우선순위 큐에서 여태까지 가장 많았던 적의 수를 꺼내 n에 더한다.
      n += pq.peek();
      pq.pop();
      k--; // 무적권을 사용한다.
    }
    n -= enemy[i];
    answer++;
  }

  return answer;
}
