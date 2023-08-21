// 모든 조합을 구하여 반환하는 함수
const getCombinations = (arr, selectNumber) => {
  const result = [];
  if (selectNumber === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    result.push(...combinations.map((v) => [fixed, ...v]));
  });

  return result;
};

// 유일성을 만족하는 조합을 반환하는 함수
const getUniqueCombinations = (relation, combinations) => {
  const result = [];

  combinations.forEach((combination) => {
    let set = new Set();
    relation.forEach((rel) => {
      let key = "";
      combination.forEach((comb) => (key += rel[comb]));
      set.add(key);
    });
    if (set.size === relation.length) result.push(combination);
  });

  return result;
};

// 최소성을 만족하는 조합을 반환하는 함수
const getMinimalCombinations = (combinations) => {
  const result = [];

  while (combinations.length) {
    result.push(combinations[0]);
    combinations = combinations.reduce((prev, curr) => {
      // 현재 combinations[0]의 모든 원소가 curr에 포함되어 있다면 curr은 최소성을 만족하지 않는 것
      let isNotMinimal = combinations[0].every((e) => curr.includes(e));
      // isNotMinimal이 false인 경우에만 push한다.
      if (!isNotMinimal) prev.push(curr);
      return prev;
    }, []);
  }

  return result;
};

function solution(relation) {
  const columnSize = relation[0].length;
  const arr = Array.from({ length: columnSize }, (v, i) => i);
  let combinations = [];
  let answer = 0;

  // 1개 고르는 경우, 2개 고르는 경우, ... 등 모든 조합 구하기
  for (let i = 1; i <= columnSize; i++) {
    combinations = [...combinations, ...getCombinations(arr, i)];
  }

  // 유일성을 만족하는 조합 구하기
  combinations = getUniqueCombinations(relation, combinations);
  // 최소성을 만족하는 조합 구하기
  combinations = getMinimalCombinations(combinations);

  return combinations.length;
}
