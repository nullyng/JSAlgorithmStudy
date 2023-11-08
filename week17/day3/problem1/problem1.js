function solution(clothes) {
  let answer = 1;
  let clothObj = {};

  clothes.forEach(([name, type]) => {
    if (!clothObj[type]) clothObj[type] = [];
    clothObj[type].push(name);
  });

  Object.entries(clothObj).forEach(([key, value]) => {
    answer *= value.length + 1;
  });

  return answer - 1;
}
