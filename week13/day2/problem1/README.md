# 문제 개요

문제: [시소 짝꿍](https://school.programmers.co.kr/learn/courses/30/lessons/152996)

분류: 연습문제

난이도: Lv.2

# 문제 풀이

주어진 배열의 값을 몸무게를 key, 그 몸무게를 가진 사람의 수를 value로 하는 맵에 저장한다.

이후 각 몸무게에 대해서 짝꿍이 될 수 있는 모든 값을 계산한다. 시소 짝꿍이 될 수 있는 비율은 1:2, 2:1, 2:3, 3:2, 3:4, 4:3이므로 해당 몸무게에 1/2, 2/1, 2/3, 3/2, 3/4, 4/3를 곱한 값을 구한다. 그리고 각 값이 정수이며 맵에 존재하는 몸무게인 경우에만 그 몸무게를 가진 사람의 수만큼 정답 변수에 더한다. 1:1 또한 시소 짝꿍이 될 수 있는 비율인데, 현재 몸무게를 가진 사람이 2명 이상인 경우에만 자기 자신을 제외한 인원 수를 정답 변수에 더한다.

마지막에 정답 변수를 2만큼 나눈 수를 반환하는데, 이때 2를 나누는 이유는 위 과정에서 중복으로 카운트되는 경우가 있기 때문이다.
예를 들어 180과 360이 시소 짝꿍이 될 수 있다고 했을 때 180에 대한 비율 계산(1:2)에서 360이 나와서 이에 대한 정답을 카운트하고, 이후 360에 대한 비율 계산(2:1)에서 180이 나와서 이에 대한 정답을 카운트한다. 180과 360, 360과 180은 같은 경우이기 때문에 2를 나눈 수를 반환해야 한다.