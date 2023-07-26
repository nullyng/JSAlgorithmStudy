# 문제 개요

**문제:** [숫자 짝꿍](https://school.programmers.co.kr/learn/courses/30/lessons/131128)

**출처:** 프로그래머스

**난이도:** Lv.1

# 문제 풀이

[다른 사람 풀이](https://velog.io/@kwb020312/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%88%AB%EC%9E%90-%EC%A7%9D%EA%BF%8D)를 참고했다.

0부터 9까지의 수가 `X`와 `Y`에 각각 몇 개 있는지 찾고 더 적은 개수만큼 `answer` 배열에 추가한다.

`answer`가 빈 배열이라면 -1, `answer`를 number 형식으로 바꿨을 때 0이라면 0을 반환한다. 그렇지 않다면 `answer`를 배열로 변환하여 내림차순 정렬한 후 `join()`을 통해 다시 문자열로 바꾸어 반환한다.

# 알게 된 점

## String.prototype.repeat()

문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환한다.

```jsx
str.repeat(count);
```

## 참고

🔗 [String.prototype.repeat()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
