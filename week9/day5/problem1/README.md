# 문제 개요

문제: [방문 길이](https://school.programmers.co.kr/learn/courses/30/lessons/49994)

분류: Summer/Winter Coding(~2018)

난이도: Lv.2

# 문제 풀이

[다른 사람의 풀이](https://school.programmers.co.kr/questions/40465)를 참고했다.

중복된 길을 제외하기 위해 **Set 자료구조**를 활용한다.

현재 위치에서 UDLR 명령어에 따라 다음 위치로 이동할 수 있다면 “이동 전 좌표+이동 후 좌표” 문자열과 “이동 후 좌표+이동 전 좌표” 문자열을 Set에 저장한다.

ex) (0,0)→(0,1) : Set에 “0001”과 “0100” 저장

길의 양방향에 대해 저장했으므로 마지막에 Set의 크기에 2를 나눈 수를 반환하면 정답이 된다.
