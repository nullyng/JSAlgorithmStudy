function solution(weights) {
  let answer = 0;
  const map = new Map(); // key: 몸무게, value: 그 몸무게를 가진 사람의 수

  // 맵을 초기화한다.
  weights.forEach((weight) => {
    if (map.has(weight)) map.set(weight, map.get(weight) + 1);
    else map.set(weight, 1);
  });

  // 정답을 업데이트하는 함수.
  const sum = (value) => {
    // value가 정수이고 맵에 존재하는 몸무게라면 그 수만큼 정답을 카운트한다.
    if (value % 1 === 0 && map.get(value)) answer += map.get(value);
  };

  weights.forEach((weight) => {
    // 짝꿍이 될 수 있는 각 비율에 대해 계산한 값을 배열에 저장한다.
    // 1:2, 2:1, 2:3, 3:2, 3:4, 4:3
    let values = [
      weight / 2,
      weight * 2,
      (weight * 2) / 3,
      (weight * 3) / 2,
      (weight * 3) / 4,
      (weight * 4) / 3,
    ];

    // 각 비율을 적용한 값의 유효성을 검사하여 정답을 업데이트한다.
    values.forEach((value) => sum(value));
    // 같은 몸무게인 사람이 여럿이라면 1:1 비율의 시소 짝꿍도 가능하다는 의미이므로 정답을 업데이트한다.
    if (map.get(weight) > 1) answer += map.get(weight) - 1;
  });

  // 같은 경우에 대해 두 번씩 더했으므로 2로 나눈 수를 반환한다.
  return answer / 2;
}
