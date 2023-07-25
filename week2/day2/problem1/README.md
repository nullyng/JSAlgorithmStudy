# 문제 개요

**문제:** [삼총사](https://school.programmers.co.kr/learn/courses/30/lessons/131705)

**출처:** 프로그래머스

**난이도:** Lv.1

# 문제 풀이

주어진 학생의 번호 중 3가지를 고르는 모든 조합을 고르고 합이 0인 경우에만 정답을 증가시킨다.

# 알게 된 점

## Array.prototype.reduce()

모든 배열의 요소들을 돌면서 어떤 값을 누적할 때 사용한다.

```jsx
arr.reduce(콜백함수, 누적값의 초기값);
```

### 예시

```jsx
const result = students.reduce((prev, curr) => prev + curr, 0);
```

- `prev`: 이전 배열 값까지 누적한 값
- `curr`: 현재 배열 값

위 코드의 경우 students 배열의 모든 요소에 대해 누적합을 구한다.

## 참고

🔗 [Array.prototype.reduce()](https://velog.io/@younoah/JS-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4%EA%B4%80%EB%A0%A8-%EB%A9%94%EC%86%8C%EB%93%9C-%EC%B4%9D%EC%A0%95%EB%A6%AC)
