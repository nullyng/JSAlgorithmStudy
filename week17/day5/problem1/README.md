# 문제 개요

문제: [N개의 최소공배수](https://school.programmers.co.kr/learn/courses/30/lessons/12953)

분류: 연습문제

난이도: Lv.2

# 문제 풀이

주어진 배열의 앞에서부터 차례대로 최소공배수를 구한다.

배열의 원소 [a, b, c, d]가 있다고 가정하자.

- a와 b의 최소공배수 lcm1을 구하고
- lcm1과 c의 최소공배수 lcm2를 구하고
- lcm2와 d의 최소공배수 lcm3를 구한다.

마지막으로 구한 최소공배수인 lcm3가 정답이 된다. 이때 최소공배수는 유클리드 호제법을 통해 최대공약수를 먼저 구한 후 두 수의 곱에서 최대공약수를 나눠서 구한다.

# 알게 된 점

기존에 알고 있었으나 좀 더 정확히 기억하기 위해 정리한다.

## 유클리드 호제법 (Euclidean Algorithm)

유클리드 호제법은 2개의 자연수의 **최대공약수**를 구하는 알고리즘이다.
여기서 호제법이란 서로 호(互)와 나누다, 덜다라는 뜻의 덜 제(除)를 써서 서로 상대방 수를 나누는 것을 말한다.

2개의 자연수 a, b(a>b)에 대해서 **a를 b로 나눈 나머지를 r이라고 할 때 a와 b의 최대공약수는 b와 r의 최대공약수와 같다**는 원리를 이용한다.

예를 들어 a가 15, b가 10이라고 하자.

- 15%10 === 5
  → b=10, r=5
- 10%5 === 0
  → b=5, r=0
- 나머지 값이 0이 되는 순간 b의 값이 최대공약수가 된다.

유클리드 호제법으로 최대공약수를 구했다면 최소공배수를 구하는 방법은 간단하다.

**최소공배수=두 자연수의 곱/최대공약수**이기 때문이다.