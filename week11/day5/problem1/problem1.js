function solution(picks, minerals) {
  var answer = 0;

  // 광물을 앞에서부터 차례대로 5개씩 한 집합으로 묶기 위한 배열을 초기화한다.
  let sortedMinerals = Array.from(
    { length: Math.ceil(minerals.length / 5) },
    () => {
      return { diamond: 0, iron: 0, stone: 0 };
    }
  );

  // 각 집합별 광물의 개수를 카운트한다.
  minerals.forEach((mineral, idx) => {
    let currIdx = Math.floor(idx / 5);
    if (mineral === "diamond") sortedMinerals[currIdx]["diamond"]++;
    else if (mineral === "iron") sortedMinerals[currIdx]["iron"]++;
    else sortedMinerals[currIdx]["stone"]++;
  });

  // 8번 케이스가 fail 뜰 때 고려해야 하는 부분.
  // 곡괭이의 수가 광물 집합의 수보다 적다면 어차피 못 캐는 뒷 부분 광물 집합은 제거해야 한다.
  // 그렇지 않으면 정렬했을 때 순서가 바뀌어 못 캐는 광물 집합을 캐는 경우가 생긴다.
  let picksCnt = picks.reduce((acc, val) => (acc += val), 0);
  if (picksCnt < sortedMinerals.length)
    sortedMinerals = sortedMinerals.slice(0, picksCnt);

  // 광물 집합들을 다이아몬드가 많은 순, 다이아몬드 개수가 같다면 철이 많은 순으로 정렬한다.
  sortedMinerals.sort((a, b) => {
    if (a["diamond"] === b["diamond"]) {
      if (a["iron"] === b["iron"]) return b["stone"] - a["stone"];
      return b["iron"] - a["iron"];
    }
    return b["diamond"] - a["diamond"];
  });

  // 다이아 곡괭이 -> 철 곡괭이 -> 돌 곡괭이 순으로 광물을 캔다.
  let currPickIdx = 0; // 현재 사용할 곡괭이 (0: 다이아몬드, 1: 철, 2: 돌)
  let currMineralIdx = 0; // 현재 캘 광물의 집합

  // 곡괭이를 다 사용하거나 모든 광물을 캘 때까지 수행한다.
  while (currPickIdx < 3 && currMineralIdx < sortedMinerals.length) {
    // 현재 곡괭이를 전부 사용했다면 다음 곡괭이를 사용한다.
    if (picks[currPickIdx] <= 0) {
      currPickIdx++;
      continue;
    }

    // 현재 집합에 해당하는 광물의 개수를 변수에 저장한다.
    let diaCnt = sortedMinerals[currMineralIdx]["diamond"];
    let irCnt = sortedMinerals[currMineralIdx]["iron"];
    let stCnt = sortedMinerals[currMineralIdx]["stone"];

    // 곡괭이 종류에 따라 피로도를 계산하여 더한다.
    if (currPickIdx === 0) {
      answer += diaCnt + irCnt + stCnt;
      picks[0]--;
    } else if (currPickIdx === 1) {
      answer += diaCnt * 5 + irCnt + stCnt;
      picks[1]--;
    } else {
      answer += diaCnt * 25 + irCnt * 5 + stCnt;
      picks[2]--;
    }

    // 다음 광물 집합으로 넘어간다.
    currMineralIdx++;
  }

  return answer;
}
