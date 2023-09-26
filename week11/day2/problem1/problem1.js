const getDotsCnt = (x, r, rName) => {
  // 피타고라스의 정의를 이용하여 원과 접하는 y좌표를 구한다.
  const y = Math.sqrt(r * r - x * x);

  // r1을 기준으로 점의 개수를 구할 때, y좌표가 정수라면 1만큼 뺀 값을 반환한다.
  if (rName === "r1" && y % 1 === 0) return y - 1;
  // 그렇지 않다면 y좌표에서 소수점을 뗀 값을 반환한다.
  return Math.floor(y);
};

function solution(r1, r2) {
  let answer = 0;

  // 1부터 r2-1까지 모든 x축에 대해 점의 개수를 구한다.
  for (let x = 1; x < r2; x++) {
    // 현재 x축이 r1보다 작다면 r2를 기준으로 구한 점의 개수 - r1을 기준으로 구한 점의 개수를 answer에 더한다.
    if (x < r1) answer += getDotsCnt(x, r2, "r2") - getDotsCnt(x, r1, "r1");
    // 그렇지 않다면 r2를 기준으로 구한 점의 개수를 answer에 더한다.
    else answer += getDotsCnt(x, r2, "r2");
  }

  // 네 사분면의 점의 개수를 합친다.
  answer *= 4;
  // x=0, y=0에 해당하는 점의 개수를 합친다.
  answer += (r2 - r1 + 1) * 4;

  return answer;
}
