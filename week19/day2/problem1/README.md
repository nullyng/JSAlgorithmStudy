# 문제 개요

문제: [멀리 뛰기](https://school.programmers.co.kr/learn/courses/30/lessons/12914)

분류: 연습문제

난이도: Lv.2

# 문제 풀이

DP를 사용해 풀이했다.

문제에서 한 번에 1칸, 또는 2칸만 뛸 수 있다고 했으므로 경우의 수를 직접 구해보면 쉽게 규칙을 찾을 수 있었다.

![](https://velog.velcdn.com/images/nullyng/post/03f02243-9ee8-411e-9951-2015bda95c8f/image.png)

dp[3] = dp[1] + dp[2] = 1 + 2 = 3
dp[4] = dp[2] + dp[3] = 2 + 3 = 5
dp[5] = dp[3] + dp[4] = 3 + 5 = 8

따라서 dp[i] = dp[i-2] + dp[i-1] 임을 알 수 있다.
