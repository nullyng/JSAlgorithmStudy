const collatz = (num) => {
  let result = [0];

  while (1) {
    if (num === 1) break;

    // 조건에 따라 정적분 결과를 배열에 추가하고 num을 업데이트한다.
    if (num % 2 === 0) {
      let next = num / 2;
      result.push(num - (num - next) / 2);
      num = next;
    } else {
      let next = num * 3 + 1;
      result.push(next - (next - num) / 2);
      num = next;
    }
  }

  // 구간별 정적분 결과를 누적하여 더한다.
  for (let i = 1; i < result.length; i++) result[i] += result[i - 1];

  return result;
};

function solution(k, ranges) {
  var answer = [];
  // 구간별 정적분 결과를 미리 구하고 이를 누적해서 더한 값을 배열에 저장한다.
  let prefixSum = collatz(k);
  let n = prefixSum.length - 1;

  // 각 구간에 해당하는 결과값을 정답 배열에 추가한다.
  ranges.forEach(([a, b]) => {
    // 끝 범위는 항상 음수로 주어지며 [a, -b]에서 -b는 n-b와 같다.
    b += n;

    if (a > b) answer.push(-1.0);
    else {
      answer.push(prefixSum[b] - prefixSum[a]);
    }
  });

  return answer;
}
