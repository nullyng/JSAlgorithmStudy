// score 이상의 수가 처음으로 나오는 인덱스(lower bound)를 찾아서 arr 배열의 길이에서 뺀 값을 반환한다.
// ex) arr: [10, 20, 40, 100, 150], score: 120 일 때
// left = 0, right = 5, mid = 2 -> arr[mid] = 40, 40 < 120이므로 left = mid + 1
// left = 3, right = 5, mid = 4 -> arr[mid] = 120, 120 === 120이므로 right = mid
// left = 3, right = 4, mid = 3 -> arr[mid] = 100, 100 < 120이므로 left = mid + 1
// left = 4, right = 4, left === right이므로 종료, return 5-4 = 1, 즉 score보다 크거나 같은 값은 1개이다.
const binarySearch = (arr, score) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < score) left = mid + 1;
    else right = mid;
  }

  return arr.length - left;
};

// info 배열의 각 조건을 key로 하고 그 조건에 해당하는 사람의 점수 배열을 value로 갖는 객체를 반환한다.
const getInfoObj = (info) => {
  const infoObj = {};

  // 해당하는 key를 찾아서 점수를 push한다.
  info.forEach((infoStr) => {
    let infoArr = infoStr.split(" ");
    let score = Number(infoArr.pop());
    let key = infoArr.join("");

    if (infoObj[key]) infoObj[key].push(score);
    else infoObj[key] = [score];
  });

  // 모든 key의 value를 정렬한다. (추후 이진탐색을 위하여)
  for (const key in infoObj) {
    infoObj[key].sort((a, b) => a - b);
  }

  return infoObj;
};

// 쿼리를 만족하는 사람의 수를 반환한다.
const getResult = (infoObj, queryArr, score) => {
  const infoObjKeys = Object.keys(infoObj);

  // 전체 키 중에서 쿼리에 있는 조건을 전부 만족하는 것들을 걸러내고(filter), 각 키에 해당하는 value 배열에서 점수 조건을 만족하는 사람의 수를 구한다(reduce).
  // ex) cpp, backend, junior, 120이 조건이라면 'cpp'와 'backend'와 'junior'를 모두 포함하는 key를 찾아 걸러낸다.
  // 걸러낸 key 배열에서 각 key에 해당하는 value 중 120 이상인 값의 개수를 구하여 반환한다.
  return infoObjKeys
    .filter((key) => queryArr.every((query) => key.includes(query)))
    .reduce((prev, key) => prev + binarySearch(infoObj[key], score), 0);
};

function solution(info, query) {
  let answer = [];
  const infoObj = getInfoObj(info);

  // 각 쿼리 문자열에 대해 ' and ', ' ', '-'를 기준으로 자르고, 만약 빈 문자열이 있으면 이를 제거한다.
  // 그렇게 얻은 각 배열(조건을 담은 배열)에 대해 getResult 함수를 호출하여 조건을 만족하는 사람의 수를 answer에 push한다.
  query
    .map((queryStr) => queryStr.split(/ and | |-/i).filter((v) => v !== ""))
    .forEach((queryArr) => {
      const score = Number(queryArr.pop());
      const result = getResult(infoObj, queryArr, score);
      answer.push(result);
    });

  return answer;
}
