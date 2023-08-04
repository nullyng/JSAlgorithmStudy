function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);

  // 여벌 체육복을 가져왔는데 도난당한 학생은 제외한다.
  lost.forEach((lostIdx, idx) => {
    let reserveIdx = reserve.indexOf(lostIdx);
    if (reserveIdx > -1) {
      reserve[reserveIdx] = null;
      lost[idx] = null;
    }
  });

  // 체육복을 빌려준다.
  lost.forEach((lostIdx, idx) => {
    if (reserve.includes(lostIdx - 1)) {
      // 앞번호 학생이 빌려줄 수 있다면
      let reserveIdx = reserve.indexOf(lostIdx - 1);
      reserve[reserveIdx] = null;
      lost[idx] = null;
    } else if (reserve.includes(lostIdx + 1)) {
      // 뒷번호 학생이 빌려줄 수 있다면
      let reserveIdx = reserve.indexOf(lostIdx + 1);
      reserve[reserveIdx] = null;
      lost[idx] = null;
    }
  });

  // 체육복을 빌리지 못한 학생의 수를 구한다.
  const lostPerson = lost.filter((lostIdx) => lostIdx).length;

  return n - lostPerson;
}
