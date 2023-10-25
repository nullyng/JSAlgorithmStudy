# 문제 개요

문제: [혼자 놀기의 달인](https://school.programmers.co.kr/learn/courses/30/lessons/131130)

분류: 연습문제

난이도: Lv.2

# 문제 풀이

이미 연 상자의 카드는 -1로 값을 변경하여 값이 -1인 카드가 든 상자를 만나기 전까지 아래를 반복한다.

1. 현재 상자에 든 카드를 `box` 배열에 추가한다.
2. 현재 상자에 든 카드 값을 -1로 변경한다.
3. 현재 상자를 카드가 가리키는 상자로 업데이트 한다.

값이 -1인 카드가 든 상자를 만나면 위 과정을 종료하고 `box` 배열을 `boxes` 배열에 추가한다.

모든 카드에 대해 탐색이 끝났다면 `boxes` 배열을 각 원소의 길이 순으로 내림차순 정렬한다. 그리고 정렬한 배열에서 0번째 원소의 길이와 1번째 원소의 길이를 곱한 값을 반환한다. 이때 `boxes`의 길이가 1이면 상자 그룹이 하나뿐이기 때문에 0을 반환한다.