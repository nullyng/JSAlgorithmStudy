function solution(m, n, startX, startY, balls) {
  let answer = [];

  balls.forEach(([x, y]) => {
    const distOfY = y - startY; // y축 간 거리
    const distOfX = x - startX; // x축 간 거리

    // 목표 좌표를 상, 하, 좌, 우로 대칭시켰을 때 시작 좌표와의 거리를 구한다.
    // top: y=n을 기준으로 대칭시킨 좌표와 시작 좌표 사이의 거리(상)
    // bottom: y=0을 기준으로 ..(하)
    // left: x=0을 기준으로 ..(좌)
    // right: x=m을 기준으로 ..(우)
    const top = distOfX ** 2 + (y - 2 * n + startY) ** 2;
    const bottom = distOfX ** 2 + (y + startY) ** 2;
    const left = (x + startX) ** 2 + distOfY ** 2;
    const right = (x - 2 * m + startX) ** 2 + distOfY ** 2;

    if (x === startX) {
      // 시작 좌표와 목표 좌표가 같은 x축에 있다면
      if (y > startY)
        // 시작 좌표가 목표 좌표보다 아래에 있다면 위쪽 원쿠션을 제외하고 가능하다.
        answer.push(Math.min(bottom, left, right));
      // 그렇지 않다면 아래쪽 원쿠션을 제외하고 가능하다.
      else answer.push(Math.min(top, left, right));
    } else if (y === startY) {
      // 시작 좌표와 목표 좌표가 같은 x축에 있다면
      if (x > startX)
        // 시작 좌표가 목표 좌표보다 왼쪽에 있다면 오른쪽 원쿠션을 제외하고 가능하다.
        answer.push(Math.min(top, bottom, left));
      // 그렇지 않다면 왼쪽 원쿠션을 제외하고 가능하다.
      else answer.push(Math.min(top, bottom, right));
    }
    // 시작 좌표와 목표 좌표가 서로 다른 x축, y축에 있다면 모든 방면에 대한 원쿠션이 가능하다.
    else answer.push(Math.min(top, bottom, left, right));
  });

  return answer;
}
