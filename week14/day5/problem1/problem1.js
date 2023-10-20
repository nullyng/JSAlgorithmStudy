function solution(topping) {
  let olderObj = {}; // 형이 가진 토핑의 종류를 관리하는 객체
  let olderCnt = 0; // 형이 가진 토핑 종류의 수
  let youngerObj = {}; // 동생이 가진 토핑의 종류를 관리하는 객체
  let youngerCnt = 0; // 동생이 가진 토핑 종류의 수
  let answer = 0;

  // 처음엔 형이 모든 토핑을 가진다.
  topping.forEach((item) => {
    if (!olderObj[item]) {
      olderObj[item] = 1;
      olderCnt++;
    } else olderObj[item]++;
  });

  // 앞에서부터 토핑 하나씩 동생이 가져간다.
  topping.forEach((item) => {
    // 형의 객체에서는 해당 토핑 개수를 줄이고
    olderObj[item]--;
    // 토핑 개수가 0개가 됐을 때 객체에서 토핑을 삭제하고 토핑 종류의 수를 감소시킨다.
    if (olderObj[item] === 0) {
      delete olderObj[item];
      olderCnt--;
    }

    // 동생의 객체에서는 해당 토핑 개수를 증가시킨다.
    // 해당 토핑을 처음 가지게 되는 때 토핑 종류의 수를 증가시킨다.
    if (!youngerObj[item]) {
      youngerObj[item] = 1;
      youngerCnt++;
    } else youngerObj[item]++;

    // 두 사람의 토핑 종류의 개수가 같을 때 정답을 카운트한다.
    if (olderCnt === youngerCnt) answer++;
  });

  return answer;
}
