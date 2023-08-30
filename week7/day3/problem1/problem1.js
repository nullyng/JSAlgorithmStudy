/** 다중집합을 만드는 함수, { 문자열: 개수 } 형태의 객체를 반환한다. */
const makeSet = (str) => {
  let result = {};
  // 문자열을 소문자로 변환한다.
  str = str.toLowerCase();

  for (let i = 0; i < str.length - 1; i++) {
    // 두 글자씩 자르고 영문자를 제외한 글자를 빈 문자로 치환했을 때
    let slicedStr = str.substring(i, i + 2).replace(/[^A-Za-z]/g, "");
    // 문자열의 길이가 2인 경우에만 다중집합 객체에 해당 문자열을 추가한다.
    if (slicedStr.length === 2) {
      if (result[slicedStr] === undefined) result[slicedStr] = 0;
      result[slicedStr]++;
    }
  }

  // { 집합의 원소: 개수 } 형태의 객체를 반환한다.
  return result;
};

function solution(str1, str2) {
  let answer = 65536;

  // 두 문자열에 대해 각각 다중집합 객체를 만든다.
  let set1 = makeSet(str1);
  let set2 = makeSet(str2);

  // 다중집합의 원소를 비교하여 교집합 개수와 합집합 개수를 구한다.
  let intersectionCnt = 0;
  let unionCnt = 0;

  // 교집합의 경우 한쪽 다중집합만 살펴봐도 구할 수 있다.
  Object.keys(set1).forEach((str) => {
    // 현재 다중집합의 어떤 원소가 다른 다중집합에 있는 경우에만
    if (set2[str] !== undefined) {
      // 두 원소의 개수 중 더 작은 개수를 교집합 개수에 누적하여 더한다.
      intersectionCnt += Math.min(set1[str], set2[str]);
    }
  });

  // 합집합의 경우 두 쪽 다중집합의 원소를 모두 살펴봐야 한다.
  // 각 다중집합의 원소를 set에 중복없이 저장한다.
  let unionSet = new Set();

  Object.keys(set1).forEach((str) => unionSet.add(str));
  Object.keys(set2).forEach((str) => unionSet.add(str));

  // set에서 원소를 하나씩 꺼내며 합집합의 개수를 누적하여 더한다.
  unionSet.forEach((key) => {
    if (set1[key] === undefined) unionCnt += set2[key];
    else if (set2[key] === undefined) unionCnt += set1[key];
    else unionCnt += Math.max(set1[key], set2[key]);
  });

  // 교집합과 합집합의 개수가 둘 다 0개라면 나누기 연산을 할 수 없으므로 자카드 유사도를 1로 가정하고 정답을 반환한다.
  if (intersectionCnt === 0 && unionCnt === 0) return 65536;

  // 교집합과 합집합의 개수를 이용하여 자카드 유사도를 구하고 반환한다.
  answer = Math.floor((intersectionCnt / unionCnt) * answer);
  return answer;
}
