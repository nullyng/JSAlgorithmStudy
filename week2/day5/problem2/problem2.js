function solution(sizes) {
  let maxWidth = -Infinity,
    maxHeight = -Infinity;

  sizes.forEach(([width, height]) => {
    // 더 긴 값 = maxLength, 더 짧은 값 = minLength
    let maxLength = Math.max(width, height);
    let minLength = Math.min(width, height);

    // 더 긴 값을 지갑의 가로 값으로, 더 짧은 값을 지갑의 세로 값으로 저장
    maxWidth = Math.max(maxWidth, maxLength);
    maxHeight = Math.max(maxHeight, minLength);
  });

  return maxWidth * maxHeight;
}
