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
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
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

    while (curr * 2 + 1 < n) {
      const leftChild = curr * 2 + 1;
      const rightChild = leftChild + 1;
      const smallerChild =
        rightChild < n && this.heap[rightChild] < this.heap[leftChild]
          ? rightChild
          : leftChild;

      if (x > this.heap[smallerChild]) {
        [this.heap[curr], this.heap[smallerChild]] = [
          this.heap[smallerChild],
          this.heap[curr],
        ];
        curr = smallerChild;
      } else break;
    }
  }
}

function solution(book_time) {
  const pq = new PriorityQueue();

  book_time.forEach(([startTime, endTime], idx) => {
    let [startHour, startMinute] = startTime.split(":").map(Number);
    let [endHour, endMinute] = endTime.split(":").map(Number);

    book_time[idx] = [
      startHour * 60 + startMinute,
      endHour * 60 + endMinute + 10,
    ];
  });

  book_time.sort((a, b) => a[0] - b[0]);
  pq.push(book_time[0][1]);

  for (let i = 1; i < book_time.length; i++) {
    if (pq.peek() <= book_time[i][0]) pq.pop();
    pq.push(book_time[i][1]);
  }

  return pq.heap.length;
}
