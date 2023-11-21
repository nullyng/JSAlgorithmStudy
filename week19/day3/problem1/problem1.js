function isValidBracketStr(str) {
  let stack = [];
  let top = -1;
  let openCnt = str.split("").filter((v) => v === "(").length;
  let closeCnt = str.split("").filter((v) => v === ")").length;

  if (str.length % 2 === 1) return false;
  if (openCnt !== closeCnt) return false;

  for (let i = 0; i < str.length; i++) {
    if (top == -1 && str[i] == ")") return false;
    if (top > -1 && stack[top] == "(" && str[i] == ")") {
      stack.pop();
      top--;
    } else {
      stack.push(str[i]);
      top++;
    }
  }

  return top > -1 ? false : true;
}

function solution(s) {
  return isValidBracketStr(s);
}
