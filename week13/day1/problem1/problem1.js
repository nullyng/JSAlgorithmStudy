function solution(x, y, n) {
  let answer = 0;
  let queue = [];

  queue.push(y);

  while (queue.length > 0) {
    let size = queue.length;
    let set = new Set();

    while (size--) {
      let front = queue.shift();

      if (front === x) return answer;

      if (front - n > 0 && !set.has(front - n)) {
        queue.push(front - n);
        set.add(front - n);
      }
      if ((front / 2) % 1 === 0 && front / 2 > 0 && !set.has(front / 2)) {
        queue.push(front / 2);
        set.add(front / 2);
      }
      if ((front / 3) % 1 === 0 && front / 3 > 0 && !set.has(front / 3)) {
        queue.push(front / 3);
        set.add(front / 3);
      }
    }
    answer++;
  }

  return -1;
}
