function solution(id_list, report, k) {
  let answer = [];
  let reported = {}; // id별 신고 당한 횟수
  let reporting = {}; // id별 신고한 id

  id_list.forEach((id) => {
    reported[id] = 0;
    reporting[id] = [];
  });

  report.forEach((detail) => {
    let [userId, reportedId] = detail.split(" ");

    // 동일한 유저에 대해 신고한 적이 없다면
    if (!reporting[userId].includes(reportedId)) {
      reported[reportedId]++;
      reporting[userId].push(reportedId);
    }
  });

  for (let reportingId in reporting) {
    let cnt = 0;
    reporting[reportingId].forEach((reportedId) => {
      if (reported[reportedId] >= k) cnt++;
    });
    answer.push(cnt);
  }

  return answer;
}
