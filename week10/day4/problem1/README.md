# 문제 개요

문제: [교점에 별 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/87377)

분류: 위클리 챌린지

난이도: Lv.2

# 문제 풀이

문제의 참고사항을 바탕으로 교점을 찾는다.

<img width="458" alt="스크린샷 2023-09-21 오후 5 55 19" src="https://github.com/nullyng/MyAlgorithmStudy/assets/57346428/3415d669-bea9-491f-8ca4-2c84d04e7291">

두 직선이 평행 또는 일치하거나 교점이 정수가 아닌 경우 건너뛴다. 그렇지 않다면 교점 목록을 저장하는 배열에 교점을 추가하고 가장 작은 좌표와 큰 좌표를 업데이트한다.

모든 교점을 찾은 후 가장 작은 좌표와 큰 좌표를 바탕으로 최소 크기의 격자판을 만들고, 격자판에서 교점에 해당하는 부분을 `*`로 바꾼다.

# 알게 된 점

## 값이 정수인지 실수인지 판단하기

1. `Number.isInteger()` 사용하기

   ```jsx
   console.log(Number.isInteger(3)); // true
   console.log(Number.isInteger(99.9)); // false
   ```

2. 나머지 연산자(`%`) 사용하기

   ```jsx
   console.log(10 % 1 === 0); // true
   console.log(13.666 % 1 === 0); // false
   ```

## 참고

🔗 [값이 정수인지 실수인지 판단하기](https://hianna.tistory.com/463)
