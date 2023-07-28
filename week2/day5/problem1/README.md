# 문제 개요

**문제:** [신고 결과 받기](https://school.programmers.co.kr/learn/courses/30/lessons/92334)

**출처:** 프로그래머스

**난이도:** Lv.1

# 문제 풀이

- `reported` → id별 신고 당한 횟수를 저장하는 객체
- `reporting` → id별 신고한 id 배열을 저장하는 객체

먼저 주어진 id 배열을 돌면서 `reported`와 `reporting`을 초기화한다. 이후 신고 내역을 보면서 각 객체에 해당하는 정보를 저장한다. 이때 이전과 동일한 신고 내역인 경우, 즉 `reporting` 객체에서 해당 신고자 id에 해당하는 key의 value 값에 피신고자의 id가 이미 존재한다면 건너뛴다.

`reporting` 객체의 값을 하나씩 꺼내보면서 해당 신고자가 신고한 id 목록 배열에 존재하는 피신고자의 id를 `reported` 객체에서 조회하여 그 값이 `k` 이상인 경우 카운트하고, 최종 카운트 값을 정답 배열에 push한다.
