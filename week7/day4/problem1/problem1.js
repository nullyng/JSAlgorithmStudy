const bfs = (places, applicant) => {
  let queue = [];
  let visited = Array.from({ length: 5 }, (v, i) => new Array(5));
  let dy = [-1, 1, 0, 0];
  let dx = [0, 0, -1, 1];

  queue.push([...applicant]);
  visited[applicant[0]][applicant[1]] = true;

  // 맨해튼 거리가 2 이하인 곳만 살펴본다.
  for (let i = 0; i < 2; i++) {
    let size = queue.length;

    // 현재 큐에 있는 것들을 모두 꺼내어 살펴본다.
    for (let j = 0; j < size; j++) {
      let [y, x] = queue[0];
      queue.shift();

      for (let d = 0; d < 4; d++) {
        let ny = y + dy[d];
        let nx = x + dx[d];

        if (ny < 0 || ny >= 5 || nx < 0 || nx >= 5) continue;
        if (visited[ny][nx] || places[ny][nx] == "X") continue;

        // 다음 위치에 응시자가 앉아있다면 false를 반환한다.
        if (places[ny][nx] == "P") return false;
        visited[ny][nx] = true;
        queue.push([ny, nx]);
      }
    }
  }

  return true;
};

function solution(places) {
  let answer = [];

  // 다섯 대기실에 대해서 수행한다.
  for (let i = 0; i < 5; i++) {
    // 응시자가 있는 자리를 뽑아낸다.
    let applicants = [];
    places[i].forEach((row, rowIdx) => {
      row.split("").forEach((col, colIdx) => {
        if (col === "P") applicants.push([rowIdx, colIdx]);
      });
    });

    let isAvailable = true;
    for (let j = 0; j < applicants.length; j++) {
      // 각 응시자가 앉은 자리에서 맨해튼 거리 2 이하의 자리에 또 다른 응시자가 앉아있는지 확인한다.
      if (!bfs(places[i], applicants[j])) {
        // 있다면 isAvailable을 false로 바꾸고 종료한다.
        isAvailable = false;
        break;
      }
    }

    // isAvailable 값에 따라 정답을 추가한다.
    if (isAvailable) answer.push(1);
    else answer.push(0);
  }

  return answer;
}
