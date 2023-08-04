function solution(N, stages) {
  let answer = [];
  let peopleCnt = stages.length;
  let failure = Array.from({ length: N + 1 }, (v, idx) => [idx, 0]); // [스테이지 번호, 실패율]

  // stages 배열에서 각 스테이지별로 도전하고 있는 사람이 몇 명인지 찾는다.
  // 도전하고 있는 사람의 수에 따라 실패율을 계산하여 저장한다.
  for (let i = 1; i <= N; i++) {
    let challenger = stages.reduce((prev, stage) => prev + (stage === i), 0);
    if (challenger === 0) failure[i][1] = 0;
    else {
      failure[i][1] = challenger / peopleCnt;
      peopleCnt -= challenger;
    }
  }

  // 실패율이 같다면 스테이지 번호가 작은 순으로, 그렇지 않다면 실패율이 높은 순으로 정렬한다.
  failure.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return b[1] - a[1];
  });

  // 0번 스테이지를 제외하고 실패율에 따라 정렬한 스테이지의 번호를 answer에 push한다.
  failure.forEach((stage) => {
    if (stage[0] > 0) {
      answer.push(stage[0]);
    }
  });

  return answer;
}
