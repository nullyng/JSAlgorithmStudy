# 문제 개요

문제: [2 x n 타일링](https://school.programmers.co.kr/learn/courses/30/lessons/12900)

분류: 연습문제

난이도: Lv.2

# 문제 풀이

DP를 활용하여 풀이했으며, 직접 그려보면 쉽게 규칙을 찾을 수 있었다.

![](https://velog.velcdn.com/images/nullyng/post/b7c544a7-0261-47f2-903a-08df5ec5561e/image.png)

`n`이 1, 2, 3, 4, 5일 때 타일을 채우는 방법은 각각 1개, 2개, 3개, 5개, 8개가 된다.
따라서 점화식은 `dp[i] = dp[i-2] + dp[i-1]`로 세울 수 있다.

이렇게 직접 경우의 수들을 구하고 이를 이용해 수식을 찾을 수도 있지만 타일을 채우는 방법에서도 규칙을 찾을 수 있다.

예를 들어 `n`이 4일 때 타일을 채우는 방법은 아래와 같다.

![](https://velog.velcdn.com/images/nullyng/post/c7a1d0f7-45ba-4056-8d05-94a537b213d5/image.png)

- `n`이 2일 때 타일을 채우는 방법(파란색)에 1x2 크기의 타일을 덧붙인 것
- `n`이 3일 때 타일을 채우는 방법(분홍색)에 2x1 크기의 타일을 덧붙인 것

![](https://velog.velcdn.com/images/nullyng/post/a654b4fe-84c5-4488-81c6-dc4eaf3c7c23/image.png)

`n`이 5일 때도 마찬가지이다. 따라서 위의 점화식을 통해 경우의 수를 구하고 이를 반환하면 정답이 된다.
