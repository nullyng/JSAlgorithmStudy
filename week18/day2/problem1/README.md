# 문제 개요

문제: [행렬의 곱셈](https://school.programmers.co.kr/learn/courses/30/lessons/12949)

분류: 연습문제

난이도: Lv.2

# 문제 풀이

i\*k 크기의 행렬A와 k\*j 크기의 행렬B를 곱하면 i\*j 크기의 행렬AB가 반환된다.

![](https://velog.velcdn.com/images/nullyng/post/6cbf615e-7708-422f-aaac-fba2d520cce7/image.png)

이때 행렬AB의 (0, 0)은 행렬A의 0번 행의 원소들과 행렬B의 0번 열의 원소들을 각각 곱해서 더한 것과 같다.

- 행렬AB (0, 0)
  = 행렬A (0, 0) \* 행렬B (0, 0) + 행렬A (0, 1) \* 행렬B (1, 0)
  = 1 \* 3 + 4 \* 3
  = 15

삼중 for문을 이용하여 이를 구현한다.
