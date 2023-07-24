# 문제 개요

**문제:** [햄버거 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/133502)

**출처:** 프로그래머스

**난이도:** Lv.1

# 문제 풀이

스택과 비슷한 형태로 풀이할 수 있다.

재료를 순서대로 배열에 push하면서 끝부분 4개의 메뉴가 빵 야채 고기 빵일 때 그만큼 pop한다. 이때 정답을 1만큼 증가시키고 현재 배열의 인덱스 값 또한 함께 업데이트 해줘야 한다.

# 알게 된 점

## 스택 구현하기

```tsx
class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }
  push(item) {
    this.arr[index++] = item;
  }
  pop() {
    if (index >= 0) return null;
    return this.arr[--this.index];
  }
}
```

## 참고

🔗 [스택 구현하기](https://velog.io/@kimhyo_0218/JavaScript-%EC%8A%A4%ED%83%9DStack-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
