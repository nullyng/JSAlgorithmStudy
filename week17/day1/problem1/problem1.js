function solution(prices) {
  let answer = Array.from(
    { length: prices.length },
    (_, i) => prices.length - i - 1
  );
  let stack = [];
  let top = -1;

  prices.forEach((price, idx) => {
    while (top >= 0 && stack[top][0] > price) {
      answer[stack[top][1]] = idx - stack[top][1];
      stack.pop();
      top--;
    }
    stack.push([price, idx]);
    top++;
  });

  return answer;
}
