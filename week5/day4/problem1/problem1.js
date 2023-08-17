const makeCombination = (arr, count) => {
  const result = [];
  if (count === 1) return arr.map((v) => [v]);

  // 재귀를 통해 모든 경우의 수를 만들어서 배열에 담는다.
  // Array.prototype.forEach((element, index, array) => {...})
  // 여기서 array는 forEach()를 호출한 배열을 의미한다.
  arr.forEach((item, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combination = makeCombination(rest, count - 1);
    result.push(...combination.map((comb) => [item, ...comb]));
  });

  return result;
};

function solution(orders, course) {
  let answer = [];

  course.forEach((count) => {
    const menus = new Map();

    orders.forEach((order) => {
      // 각 주문에서 특정 개수의 메뉴를 고르는 모든 경우의 수를 만들고
      const combination = makeCombination(order.split("").sort(), count);
      // 경우의 수를 만족하는 주문이 있으면 개수를 카운트하여 map에 저장한다.
      combination.forEach((comb) => {
        const combStr = comb.join("");
        menus.set(combStr, menus.has(combStr) ? menus.get(combStr) + 1 : 1);
      });
    });

    // 가장 큰 주문 횟수를 저장한다.
    let maxValue = Math.max(...menus.values());

    // 가장 큰 주문 횟수와 주문 횟수가 동일하며 최소 2명 이상의 손님이 주문했다면 정답에 추가한다.
    // Map.prototype.forEach((value, key, map) => {...})
    menus.forEach((count, menu) => {
      if (count === maxValue && count >= 2) answer.push(menu);
    });
  });

  // 정렬한 답을 반환한다.
  return answer.sort();
}
