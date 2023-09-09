function solution(s) {
  let answer = 0;
  let tryCnt = s.length;

  while (tryCnt--) {
    let stack = [];
    let top = -1;
    let bracketCnt = 0;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === "[" || s[i] === "(" || s[i] === "{") {
        stack.push(s[i]);
        top++;
        bracketCnt++;
      } else {
        bracketCnt--;
        if (stack.length === 0) continue;

        switch (s[i]) {
          case "]":
            if (stack[top--] === "[") stack.pop();
            break;
          case ")":
            if (stack[top--] === "(") stack.pop();
            break;
          case "}":
            if (stack[top--] === "{") stack.pop();
        }
      }
    }

    if (stack.length === 0 && bracketCnt === 0) answer++;
    s = s.slice(1) + s[0];
  }

  return answer;
}
