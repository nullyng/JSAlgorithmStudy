function solution(n, info) {
  let answer = [];
  let infoOfLion = new Array(11).fill(0);
  let maxDiffScore = 0;

  const shoot = (idx, arrow) => {
    if (arrow === 0) {
      // 화살을 다 쐈다면 어피치와 라이언의 점수를 계산한다.
      let scoreOfLion = 0;
      let scoreOfApeach = 0;

      for (let i = 0; i <= 10; i++) {
        if (info[i] === 0 && infoOfLion[i] === 0) continue;
        if (info[i] < infoOfLion[i]) scoreOfLion += 10 - i;
        else scoreOfApeach += 10 - i;
      }

      // 최대 점수 차보다 점수 차이가 많이 나면 정답을 현재 배열로 업데이트한다.
      let diff = scoreOfLion - scoreOfApeach;
      if (maxDiffScore < diff) {
        maxDiffScore = diff;
        answer = [...infoOfLion];
      } else if (maxDiffScore == diff) {
        // 점수 차가 같다면 낮은 점수를 더 많이 맞힌 것을 정답으로 업데이트한다.
        // score1 = 현재 정답인 배열의 점수 합, score2 = 현재 라이언이 맞힌 과녁 점수의 합
        let score1 = answer.reduce(
          (prev, curr, idx) => (prev += curr * (10 - idx)),
          0
        );
        let score2 = infoOfLion.reduce(
          (prev, curr, idx) => (prev += curr * (10 - idx)),
          0
        );

        // 현재 라이언이 맞힌 과녁 점수의 합이 더 작다면 낮은 점수를 더 많이 맞혔다는 것.
        // 현재 배열로 정답을 업데이트 한다.
        if (score1 > score2) answer = [...infoOfLion];
      }
      return;
    }

    for (let i = idx; i <= 10; i++) {
      let temp = 0;

      // 다음이 마지막 발이라면 화살을 다 쏜다.
      if (i === 10) {
        temp = arrow;
      } else {
        // 어피치가 쏜 화살보다 많은 화살을 가지고 있으면
        // 어피치가 쏜 화살보다 1개 더 쏜다.
        if (info[i] < arrow) {
          temp = info[i] + 1;
        } else continue; // 그렇지 않으면 쏘지 않고 넘어간다. (시간 절약)
      }

      infoOfLion[i] = temp;
      shoot(i + 1, arrow - temp);
      infoOfLion[i] = 0; // 원상복구
    }
  };

  shoot(0, n);
  if (answer.length === 0) answer.push(-1);

  return answer;
}
