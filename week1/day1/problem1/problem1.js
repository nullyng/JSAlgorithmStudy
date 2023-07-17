function solution(players, callings) {
  const map = new Map();

  // 맵에 {선수 이름, 현재 등수}를 저장한다.
  players.forEach((name, idx) => {
    map.set(name, idx);
  });

  callings.forEach((name) => {
    // 맵에서 이름이 불린 선수의 현재 등수를 가져오고
    const currIdx = map.get(name);
    // 이름이 불린 선수의 앞 선수의 이름을 가져온다.
    const front = players[currIdx - 1];

    // 두 선수의 등수를 바꾼다.
    players[currIdx - 1] = name;
    players[currIdx] = front;

    // 맵에 바뀐 등수를 업데이트한다.
    map.set(name, currIdx - 1);
    map.set(front, currIdx);
  });

  return players;
}
