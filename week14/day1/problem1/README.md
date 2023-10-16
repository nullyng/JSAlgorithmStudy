# 문제 개요

문제: [점 찍기](https://school.programmers.co.kr/learn/courses/30/lessons/140107)

분류: 연습문제

난이도: Lv.2

# 문제 풀이

[두 원 사이의 정수 쌍](https://school.programmers.co.kr/learn/courses/30/lessons/181187)과 비슷한 문제였다.

한 사분면에 대해 원점으로부터 거리가 `d` 이하인 위치에 있는 정수 좌표의 개수를 구한다. 이때 각 x축 `a*k`(a = 0, 1, 2, 3 ...)에 대해 피타고라스의 정리를 적용하여 찍을 수 있는 점의 최대 y좌표를 구한다.

<img src="https://velog.velcdn.com/images/nullyng/post/92d9163c-135a-4916-a1eb-e45113796a71/image.jpeg" width="400px">

(a*k)^2 + y^2 = d^2
y^2 = d^2 - (a*k)^2
sqrt(y^2) = sqrt(d^2 - (a\*k)^2)

이렇게 구한 최대 y좌표에 `k`를 나눠서 나온 정수 값을 누적하여 더하고, y=0축에 찍을 수 있는 점의 개수까지 더하면 총 찍을 수 있는 점의 개수를 구할 수 있다.
