function solution(k, tangerine) {
  let answer = 0;
  let maxSize = 0;

  tangerine.forEach((item) => {
    if (maxSize < item) maxSize = item;
  });

  let cntArr = Array.from({ length: maxSize + 1 }, () => 0);

  // 크기별 귤의 개수를 구한다.
  tangerine.forEach((item) => {
    cntArr[item]++;
  });

  // 배열을 오름차순으로 정렬한다.
  cntArr = cntArr.slice(1).sort((a, b) => a - b);

  // 뒤에서부터 k개를 고를 때까지 귤을 꺼낸다.
  while (k > 0) {
    k -= cntArr.pop();
    answer++; // 종류의 수를 카운트한다.
  }

  return answer;
}
