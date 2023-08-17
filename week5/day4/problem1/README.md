# 문제 개요

문제: [메뉴 리뉴얼](https://school.programmers.co.kr/learn/courses/30/lessons/72411)

분류: 2021 KAKAO BLIND RECRUITMENT

난이도: Lv.2

# 문제 풀이

[다른 사람 풀이](https://mine-it-record.tistory.com/516#google_vignette)를 참고했다.

만들고 싶은 코스요리의 메뉴 개수마다 아래를 수행한다.

1. 각 주문에서 그 개수만큼 메뉴를 고르는 경우의 수를 모두 구하여 Map에 set한다.
   - ex) 만들고 싶은 코스요리의 메뉴 개수가 2개이고 “ABCDE”라는 주문이 있을 때
     - `[[”A”], [”B”]], [[”A”], [”C”]], [[”A”], [”D”]], [[”A”], [”E”]], …`
   - ex) 만들고 싶은 코스요리의 메뉴 개수가 3개이고 “ADEF”라는 주문이 있을 때
     - `[[”A”], [”D”], [”E”]], [[”A”], [”D”], [”F”]], …`
2. 어떤 경우를 만족하는 주문이 있으면 개수를 카운트하여 Map에 저장한다.
3. 모든 주문에 대해서 살펴본 이후, Map에 저장된 주문 횟수 중 가장 큰 값을 구한다.
4. 가장 큰 주문 횟수와 주문 횟수가 동일한 메뉴를 정답 배열에 추가한다.

완성된 정답 배열은 정렬하여 반환한다.

# 알게 된 점

## Array.prototype.forEach()의 콜백 파라미터

```jsx
Array.prototype.forEach((element, index, array) => {...})
```

세 번째 파라미터인 `array`는 `forEach()`를 호출한 배열을 의미한다.

## Map.prototype.forEach()의 콜백 파라미터

```jsx
Map.prototype.forEach((value, key, map) => {...})
```

세 번째 파라미터인 `map`은 `forEach()`를 호출한 Map을 의미한다.

또한 배열에서의 `forEach()`와 다르게 두 번째 인자에 key 값이 들어온다.

## 참고

🔗 [Array.prototype.forEach()의 콜백 파라미터](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

🔗 [Map.prototype.forEach()의 콜백 파라미터](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)
