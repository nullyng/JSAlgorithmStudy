# 문제 개요

문제: [후보키](https://school.programmers.co.kr/learn/courses/30/lessons/42890)

분류: 2019 KAKAO BLIND RECRUITMENT

난이도: Lv.2

# 문제 풀이

[다른 사람 풀이](https://velog.io/@euneun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%9B%84%EB%B3%B4%ED%82%A4-2019-kakao-blind-recruitment-javascript)를 참고했다.

1. 주어진 컬럼 중에서 1개를 고르는 경우, 2개를 고르는 경우, … 모든 컬럼을 고르는 경우까지 **모든 조합을 구한다.**
2. 조합 중에서 **유일성을 만족하는 조합을 구한다.**

   후보키에 해당하는 값들을 묶어서 Set에 저장하는데, 이때 set의 크기과 릴레이션의 행의 길이가 같다면 해당 후보키는 유일성을 만족하는 것이다. 이를 모든 후보키 조합에 대해 수행하여 유일성을 만족하는 조합의 배열을 구한다.

3. 유일성을 만족하는 조합 중에서 **최소성을 만족하는 조합을 구한다.**

   (유일성을 만족하는)조합 중 첫 번째 조합을 최소성을 만족하는 조합 배열에 추가한다. 이후 이 조합의 모든 원소를 포함하는 조합을 조합 배열에서 제외한다. 더이상 확인할 조합이 없을 때까지 이 과정을 반복하여 최소성을 만족하는 조합의 배열을 구한다.

4. 유일성과 최소성을 만족하는 **조합의 개수를 반환한다.**

# 알게 된 점

## 자바스크립트로 조합과 순열 알고리즘 구현하기

### 조합

재귀함수를 통해 구현할 수 있다.

```jsx
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
```

![IMG_097C6CA2C2F9-1](https://github.com/nullyng/MyAlgorithmStudy/assets/57346428/30252df4-1629-46b6-9b87-ab9efd019433)

### 순열

조합을 구할 때와는 달리 재귀함수의 파라미터로 넘기는 배열이 0부터 인덱스까지, 그리고 인덱스+1부터 마지막까지 자른 배열이다.

```jsx
const getPermutations = (arr, selectNumber) => {
  const result = [];
  if (selectNumber === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(idx + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    result.push(...permutations.map((v) => [fixed, ...v]));
  });

  return result;
};
```

![IMG_635D6B6E435E-1](https://github.com/nullyng/MyAlgorithmStudy/assets/57346428/84c75677-5fbe-4e6f-ba42-7514b2da5fb1)

## 참고

🔗 [자바스크립트로 조합과 순열 알고리즘 구현하기](https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
