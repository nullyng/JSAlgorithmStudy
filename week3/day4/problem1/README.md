# 문제 개요

**문제:** [크레인 인형뽑기 게임](https://school.programmers.co.kr/learn/courses/30/lessons/64061?language=javascript)

**출처:** 프로그래머스

**난이도:** Lv.1

# 문제 풀이

우선 각 열에 있는 인형들을 따로 뽑아내서 2차원 배열에 저장한다.

이후 크레인을 작동시킨 위치에 따라 2차원 배열에서 해당하는 위치의 첫 번째 원소(인형)를 바구니 배열에 넣는다. 만약 이 인형과 바구니 배열의 마지막 원소, 즉 가장 위에 있는 인형이 같다면 그 원소를 바구니 배열에서 pop하고 정답을 2만큼 증가시킨다.

또한 격자에서 인형을 뽑아냈으므로 2차원 배열에서 해당하는 위치의 첫 번째 원소를 shift하여 제거한다.
