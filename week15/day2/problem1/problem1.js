function solution(elements) {
  const set = new Set();

  for (let i = 0; i < elements.length; i++) {
    let prefixSum = elements[i];
    set.add(prefixSum);
    for (let j = 1; j < elements.length; j++) {
      prefixSum += elements[(i + j) % elements.length];
      set.add(prefixSum);
    }
  }

  return set.size;
}
