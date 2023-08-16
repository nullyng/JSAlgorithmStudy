# 문제 개요

문제: [순위 검색](https://school.programmers.co.kr/learn/courses/30/lessons/72412)

분류: 2021 KAKAO BLIND RECRUITMENT

난이도: Lv.2

# 문제 풀이

지원자 정보를 바탕으로 각 지원자가 만족하는 조건을 key로 하고 해당 조건을 가진 지원자의 점수 배열을 value로 하는 객체 `infoObj`를 만든다. 이때, 추후에 이진탐색을 하기 위해 `infoObj`의 모든 value를 오름차순으로 정렬해야 한다.

이후 쿼리마다 그 쿼리를 만족하는 `infoObj`의 key들을 찾고, 이진탐색을 통해 각 key의 value에서 조건 점수 이상의 수가 처음으로 나오는 인덱스(lower bound)를 찾아 value의 길이에서 뺀 값을 누적하여 더한다.

이렇게 쿼리별로 누적하여 더한 값을 정답 배열에 추가하고 이를 반환하면 정답이 된다.

# 알게 된 점

## **Array.prototype.every()**

`every()` 메서드는 배열 안의 모든 요소가 주어진 조건을 통과하면 true, 하나라도 통과하지 않으면 false를 반환한다.

```jsx
const arr = [1, 30, 39, 29, 10, 13];

console.log(arr.every((value) => value < 40)); // true
console.log(arr.every((value) => value < 20)); // false
```

## 참고

🔗 [Array.prototype.every()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

# 틀린 이유

처음에는 `“-”`를 포함한 모든 조건(`"cppbackendseniorpizza"`, `"cppbackendsenior-"`, `"cppbackend-pizza"`, `“cppbackend--”`…)을 key로 갖는 객체를 만든 후 각 지원자가 만족하는 key를 찾아 value에 그 지원자의 점수를 추가하고, 각 쿼리를 객체에서 조회하여 조건에 맞는 점수의 개수를 카운트하는 방식으로 문제를 풀이하였다.

이렇게 짠 코드를 돌렸을 때, 정확성과 효율성을 둘 다 통과하지 못했다. 정확성의 경우는 코드상에 오류가 있었을 것이고 효율성의 경우에는 점수를 만족하는 사람의 수를 찾을 때 정렬되지 않은 배열에서 무작정 차례대로 찾으려고 했기 때문이었다.

# 덧붙이는 말

내가 풀이한 방법보다 더 좋은 방법이 있을 것 같아서 찾아보다가 [다른 사람의 풀이](https://velog.io/@young_pallete/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%88%9C%EC%9C%84-%EA%B2%80%EC%83%89JavaScript)를 참고하게 되었다. 해당 풀이는 모든 조건을 key로 갖도록 하지 않고 주어진 지원자 정보에 있는 조건만을 key로 갖도록 한다는 점에서 좀 더 적은 메모리를 사용할 수 있었다.(물론 모든 조건이라고 해도 수가 그렇게 많지는 않아 엄청 큰 차이는 나지 않지만) 또한 이 풀이를 참고하여 효율성 문제를 이진탐색으로 해결할 수 있다는 점을 알게 되었고, 자바스크립트스럽게(🤓) 풀이한 코드라서 굉장히 큰 도움이 되었던 것 같다.

예전부터 느꼈던 건데 내 방식대로 문제를 풀이하고 그칠 게 아니라 다른 사람의 풀이도 살펴보는 것이 굉장히 중요한 것 같다.
