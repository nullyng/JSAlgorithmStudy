function solution(line) {
  let [minX, minY, maxX, maxY] = [Infinity, Infinity, -Infinity, -Infinity];
  let meets = []; // 교점 목록을 저장하는 배열

  line.forEach(([a, b, e], idx) => {
    for (let i = idx + 1; i < line.length; i++) {
      let [c, d, f] = line[i];
      let bottom = a * d - b * c;

      // 두 직선은 평행하거나 일치하면 교점이 존재하지 않는다.
      if (bottom === 0) continue;

      let meetX = (b * f - e * d) / bottom;
      let meetY = (e * c - a * f) / bottom;

      // 교점이 정수가 아닌 경우는 건너뛴다.
      if (meetX % 1 !== 0 || meetY % 1 !== 0) continue;

      // 교점을 추가한다.
      meets.push([meetX, meetY]);

      // 가장 작은 좌표와 큰 좌표를 업데이트한다.
      minX = Math.min(minX, meetX);
      minY = Math.min(minY, meetY);
      maxX = Math.max(maxX, meetX);
      maxY = Math.max(maxY, meetY);
    }
  });

  // 모든 별을 포함하는 최소 크기의 격자판을 만든다.
  let answer = Array.from(Array(maxY - minY + 1), () =>
    Array(maxX - minX + 1).fill(".")
  );

  //교점에 해당하는 부분을 격자판에서 *로 바꾼다.
  meets.forEach(([x, y]) => {
    answer[maxY - y][x - minX] = "*";
  });

  return answer.map((v) => v.join(""));
}
