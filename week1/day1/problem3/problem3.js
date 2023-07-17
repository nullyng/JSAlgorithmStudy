function solution(park, routes) {
  // 공원의 최대 행과 열을 저장한다.
  const H = park.length - 1;
  const W = park[0].length - 1;

  // 시작 위치를 찾아서 저장한다.
  let currY = park.findIndex((s) => s.includes("S"));
  let currX = park[currY].indexOf("S");

  // 명령을 하나씩 수행한다.
  for (const route of routes) {
    const [op, n] = route.split(" ");
    let nextY = currY;
    let nextX = currX;
    let isAvailable = true;

    // 한 칸씩 이동하면서 명령을 수행할 수 있는지 여부를 판단한다.
    for (let i = 0; i < Number(n); i++) {
      if (op === "N") nextY--;
      else if (op === "S") nextY++;
      else if (op === "W") nextX--;
      else if (op === "E") nextX++;

      // 공원을 벗어나거나 벽으로 막혀있다면 이동할 수 없으므로
      // isAvailable을 false로 변경하고 break한다.
      if (
        nextY < 0 ||
        nextY > H ||
        nextX < 0 ||
        nextX > W ||
        park[nextY][nextX] === "X"
      ) {
        isAvailable = false;
        break;
      }
    }

    // 만약 명령을 수행할 수 있다면 현재 위치를 업데이트한다.
    if (isAvailable) {
      currY = nextY;
      currX = nextX;
    }
  }

  return [currY, currX];
}
