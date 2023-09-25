function solution(targets) {
  let answer = 1;
  targets.sort((a, b) => a[0] - b[0]);

  let [currStart, currEnd] = [targets[0][0], targets[0][1]];

  targets.forEach(([start, end]) => {
    if (currEnd <= start) {
      currStart = start;
      currEnd = end;
      answer++;
    } else {
      currStart = start;
      currEnd = Math.min(currEnd, end);
    }
  });

  return answer;
}
