const getPermutations = (arr, selectNumber) => {
  const result = [];
  if (selectNumber === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    result.push(...permutations.map((v) => [fixed, ...v]));
  });

  return result;
};

function solution(k, dungeons) {
  let answer = 0;
  const permutations = getPermutations(dungeons, dungeons.length);

  permutations.forEach((permutation) => {
    let currPiro = k;
    let dungeonCnt = 0;
    for (let i = 0; i < permutation.length; i++) {
      if (currPiro < permutation[i][0]) break;
      currPiro -= permutation[i][1];
      dungeonCnt++;
    }
    answer = Math.max(answer, dungeonCnt);
  });

  return answer;
}
