# 문제 개요

문제: [쿼드압축 후 개수 세기](https://school.programmers.co.kr/learn/courses/30/lessons/68936)

분류: 월간 코드 챌린지 시즌1

난이도: Lv.2

# 문제 풀이

전체를 0이나 1로 압축할 수 있는지 확인하고, 가능하다면 각 경우에 따라 알맞은 정답(0인 경우 `[1, 0]`, 1인 경우 `[0, 1]`)을 반환한다.

그렇지 않다면 재귀 함수를 통해 배열의 제1사분면, 2사분면, 3사분면, 4사분면 각각에 대해 압축 여부를 확인하며 0으로 압축 가능한 경우 `zeroCnt`를, 1로 압축 가능한 경우 `oneCnt`를 증가시킨다.

마지막으로 `[zeroCnt, oneCnt]`를 반환하면 정답이 된다.
