function solution(order) {
  let answer = 0;
  let stack = [];
  let belt = Array.from({ length: order.length }, (v, i) => order.length - i);

  for (let i = 0; i < order.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === order[i]) {
      stack.pop();
      answer++;
    } else {
      while (belt.length > 0 && belt[belt.length - 1] !== order[i]) {
        stack.push(belt.pop());
      }
      if (belt.length === 0) break;
      belt.pop();
      answer++;
    }
  }

  return answer;
}
