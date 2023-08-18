function solution(p) {
  // 올바른 괄호 문자열 여부를 반환하는 함수
  const isCorrectBracket = (bracketStr) => {
    let stack = [];

    bracketStr.split("").forEach((bracket) => {
      if (bracket === "(") stack.push(bracket);
      else if (stack.length > 0 && bracket === ")") stack.pop();
    });

    return stack.length === 0 ? true : false;
  };

  const algorithm = (w) => {
    // 1. 빈 문자열인 경우 빈 문자열 반환
    if (!w) return "";

    // 2. 균형잡힌 괄호 문자열 u, v로 분리
    let open = 0,
      close = 0;
    for (let i = 0; i < w.length; i++) {
      if (w[i] === "(") open++;
      else close++;

      if (open === close) {
        let u = w.slice(0, i + 1);
        let v = w.slice(i + 1);

        if (isCorrectBracket(u)) {
          // 3. u가 올바른 괄호 문자열이라면
          return (u += algorithm(v));
        } else {
          // 4. u가 올바른 괄호 문자열이 아니라면
          let temp = "(";
          temp += algorithm(v) + ")";
          temp += u
            .slice(1, u.length - 1)
            .split("")
            .map((bracket) => {
              if (bracket === "(") return ")";
              else return "(";
            })
            .join("");
          return temp;
        }
      }
    }
  };

  return algorithm(p);
}
