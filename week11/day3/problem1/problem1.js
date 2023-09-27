function solution(sequence, k) {
  let answer = [0, 0];

  let [left, right] = [0, 0];
  let sum = sequence[0];
  let range = Infinity;

  while (left < sequence.length) {
    if (sum === k) {
      if (range > right - left + 1) {
        answer = [left, right];
        range = right - left + 1;
      }
      sum -= sequence[left++];
    } else if (sum < k) sum += sequence[++right];
    else sum -= sequence[left++];
  }

  return answer;
}
