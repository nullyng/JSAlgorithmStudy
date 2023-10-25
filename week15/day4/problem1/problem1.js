function solution(want, number, discount) {
  let answer = 0;
  let discountObj = {};
  let discountObjArr = Array.from(
    { length: discount.length },
    () => discountObj
  );

  // 할인하는 제품의 종류를 저장한다.
  discount.forEach((item) => {
    discountObj[item] = 0;
  });

  // discountObjArr에 할인하는 제품의 개수를 누적하여 더한 객체를 저장한다.
  discount.forEach((item, idx) => {
    if (idx > 0) discountObjArr[idx] = { ...discountObjArr[idx - 1] };
    discountObjArr[idx][item]++;
  });

  // 각 객체에서 10일 이전의 누적 합은 제외한다.
  let keys = Object.keys(discountObj);
  for (let i = discountObjArr.length - 1; i >= 10; i--) {
    keys.forEach((item) => {
      discountObjArr[i][item] -= discountObjArr[i - 10][item];
    });
  }

  // 각 날짜별 객체 중에서 원하는 제품을 모두 할인받을 수 있는 날짜의 수를 세아린다.
  discountObjArr.forEach((obj) => {
    let isAvailable = true;
    want.forEach((item, idx) => {
      if (!obj[item] || obj[item] < number[idx]) isAvailable = false;
    });
    if (isAvailable) answer++;
  });

  return answer;
}
