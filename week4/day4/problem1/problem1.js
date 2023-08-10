function solution(queue1, queue2) {
  let answer = 0;
  let isAvailable = false;
  let sumOfQueue1 = queue1.reduce((prev, curr) => (prev += curr), 0);
  let sumOfQueue2 = queue2.reduce((prev, curr) => (prev += curr), 0);
  let idxOfQueue1 = 0,
    idxOfQueue2 = 0;
  let maxTry = (queue1.length + queue2.length) * 2;

  while (answer <= maxTry) {
    if (sumOfQueue1 === sumOfQueue2) {
      isAvailable = true;
      break;
    }
    if (sumOfQueue1 < sumOfQueue2) {
      sumOfQueue1 += queue2[idxOfQueue2];
      sumOfQueue2 -= queue2[idxOfQueue2];
      queue1.push(queue2[idxOfQueue2++]);
    } else {
      sumOfQueue1 -= queue1[idxOfQueue1];
      sumOfQueue2 += queue1[idxOfQueue1];
      queue2.push(queue1[idxOfQueue1++]);
    }
    answer++;
  }

  return isAvailable ? answer : -1;
}
