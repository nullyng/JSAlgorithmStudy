function solution(storey) {
  let answer = 0;
  // storey를 숫자 하나하나로 분리하여 반전시킨 배열을 생성한다.
  // ex) 95 -> [5, 9]
  let reversedStoreyArr = storey.toString().split("").map(Number).reverse();
  console.log(reversedStoreyArr);

  // 가장 작은 자릿수부터 순차적으로 탐색한다.
  for (let i = reversedStoreyArr.length - 1; i >= 0; i--) {
    if (reversedStoreyArr[i] > 5) {
      // 현재 수가 5보다 크다면 10에서 현재 수를 뺀만큼 버튼을 누른다.
      answer += 10 - reversedStoreyArr[i];

      // 현재가 가장 큰 자릿수라면 정답을 1만큼 증가시킨다.
      if (i === 0) answer++;
      // 아니라면 다음 수를 1만큼 증가시킨다.
      else reversedStoreyArr[i - 1] += 1;
    } else if (
      reversedStoreyArr[i] === 5 &&
      i > 0 &&
      reversedStoreyArr[i - 1] >= 5
    ) {
      // 현재 수가 5와 같고 가장 큰 자릿수가 아니며, 다음 수가 5보다 크거나 같다면
      // 버튼을 5번 누르고 다음 수를 1만큼 증가시킨다.
      answer += 5;
      reversedStoreyArr[i - 1] += 1;
    } else {
      // 위 경우들에 해당하지 않으면 현재 수만큼 버튼을 누른다.
      answer += reversedStoreyArr[i];
    }
  }

  return answer;
}
