# 문제 개요

문제: [연속 부분 수열 합의 개수](https://school.programmers.co.kr/learn/courses/30/lessons/131701)

분류: 연습문제

난이도: Lv.2

# 문제 풀이

수열의 모든 원소에 대해 해당 원소 이전까지의 원소까지 누적해서 더하는 과정에 나오는 모든 값을 Set에 저장한다.

문제에서 주어진 예시로 봤을 때 7, 9, 1, 1, 4에 대해 아래를 수행한다.

- 7 → 7, 7+9, 7+9+1, 7+9+1+1, 7+9+1+1+4를 Set에 저장한다.
- 9 → 9, 9+1, 9+1+1, 9+1+1+4, 9+1+1+4+7을 Set에 저장한다.
- 1 → 1, 1+1, …

마지막에 Set의 크기를 반환하면 정답이 된다.
