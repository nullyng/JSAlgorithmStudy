function solution(expression) {
  let answer = 0;
  let numbers = expression.split(/[*|+|-]/).map(Number);
  let operations = expression.replace(/[0-9]/g, "").split("");
  let permutations = ["+-*", "+*-", "-+*", "-*+", "*+-", "*-+"].map((v) =>
    v.split("")
  );

  // 우선순위가 높은 것부터 낮은 것까지 연산한다.
  permutations.forEach((permutation) => {
    // 연산이 끝난 수와 연산자는 배열에서 제거하면서 진행할 것이므로 기존의 배열들을 복사한다.
    let copyNumbers = [...numbers];
    let copyOperations = [...operations];

    // 현재 우선순위의 연산자와 같은 연산자를 찾아서 연산한다.
    permutation.forEach((op) => {
      for (let i = 0; i < copyOperations.length; i++) {
        if (copyOperations[i] === op) {
          // 계산한 값을 피연산자 중 첫 번째 값이 있던 자리에 저장한다.
          switch (op) {
            case "+":
              copyNumbers[i] = copyNumbers[i] + copyNumbers[i + 1];
              break;
            case "-":
              copyNumbers[i] = copyNumbers[i] - copyNumbers[i + 1];
              break;
            case "*":
              copyNumbers[i] = copyNumbers[i] * copyNumbers[i + 1];
              break;
          }
          // 피연산자 중 두 번째 값은 삭제한다.
          copyNumbers.splice(i + 1, 1);
          // 현재 연산을 마친 연산자도 삭제한다.
          copyOperations.splice(i, 1);
          i--;
        }
      }
    });

    // copyNumbers[0]에 최종으로 계산한 값이 저장되므로 이를 정답과 비교하여 정답을 갱신한다.
    answer = Math.max(answer, Math.abs(copyNumbers[0]));
  });

  return answer;
}
