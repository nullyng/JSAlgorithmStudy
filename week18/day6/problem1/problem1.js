function solution(s) {
  let minValue = Infinity;
  let maxValue = -Infinity;
  s.split(" ").forEach((num) => {
    minValue = Math.min(+num, minValue);
    maxValue = Math.max(+num, maxValue);
  });
  return minValue + " " + maxValue;
}
