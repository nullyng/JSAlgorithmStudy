# 문제 개요

문제: [행렬 테두리 회전하기](https://school.programmers.co.kr/learn/courses/30/lessons/77485)

분류: 2021 Dev-Matching: 웹 백엔드 개발자(상반기)

난이도: Lv.2

# 문제 풀이

먼저 주어진 행, 열의 크기에 맞춰 1씩 증가하는 2차원 배열을 만든다.

이후 시작 행, 시작 열이 (r1, c1)이고 끝 행, 끝 열이 (r2, c2)이라고 할 때 아래를 수행하는 함수를 만든다.

1. (r1, c1) 값을 따로 저장해둔다.
2. c1열의 값들을 위쪽으로 한 칸씩 땡긴다.
3. r2행의 값들을 왼쪽으로 한 칸씩 땡긴다.
4. c2열의 값들을 아래쪽으로 한 칸씩 땡긴다.
5. r1행의 값들을 오른쪽으로 한 칸씩 땡긴다.
6. (r1, c1+1)에 따로 저장해둔 (r1, c1) 값을 넣는다.

이때 각 단계에서 가장 작은 값을 저장하고 마지막에 그 값을 반환한다.

문제에서 주어진 쿼리 각각에 대해 위 함수를 호출하며 반환받은 값을 정답 배열에 추가하고 마지막에 이를 반환한다.

# 알게 된 점

## 1씩 증가하는 2차원 배열 생성하기

### Array.from() 사용하기

```jsx
const arr = Array.from({ length: rows }, (v, r) => {
  return Array.from({ length: columns }, (v, c) => r * columns + (c + 1));
});
```

### 스프레드 연산자와 map() 사용하기

```jsx
const arr = [...Array(rows)].map((v, r) =>
  [...Array(columns)].map((v, c) => r * columns + (c + 1))
);
```

## 참고

🔗 [1씩 증가하는 2차원 배열 생성하기](https://velog.io/@minukbak/301)
