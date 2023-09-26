# 문제 개요

문제: [두 원 사이의 정수 쌍](https://school.programmers.co.kr/learn/courses/30/lessons/181187)

분류: 연습문제

난이도: Lv.2

# 문제 풀이

[다른 사람 풀이](https://sasca37.tistory.com/320)를 참고했다.

우선 한 사분면에 해당하는 점의 개수를 먼저 구하고, 이 값에 4만큼 곱하여 전체 개수를 구한다.

한 사분면의 점의 개수를 구할 때는 **피타고라스의 정의**를 이용한다.

<img src="https://velog.velcdn.com/images/nullyng/post/6ec45bfe-12d7-4a94-a23d-8ee1c52f0d10/image.jpeg" width="450px">

`r2`보다 작은 양수 x축 각각에 대해 피타고라스 정의를 이용하여 원과 접하는 y좌표를 구한다. 여기서 소수점을 뗀 정수가 해당 x축의 점의 개수가 된다.

예를 들어 `r1`이 2, `r2`가 4라고 했을 때 아래와 같이 제 1사분면의 점의 개수를 구할 수 있다.

![](https://velog.velcdn.com/images/nullyng/post/4a82d1f5-cb86-44e6-9aa2-1ce5090d67f7/image.jpeg)

1부터 `r2-1`까지 x축의 점의 개수를 구하여 `answer`에 누적하여 더한다.
현재 x축이 `r1`보다 작은 경우에는 `r2`를 기준으로 점의 개수를 구하고 그 값에서 `r1`을 기준으로 구한 점의 개수를 뺀 값을 `answer`에 더한다.
현재 x축이 `r1`보다 같거나 큰 경우에는 `r2`를 기준으로 점의 개수를 구하여 `answer`에 더한다.

위 그림은 차례대로 x축이 1일 때와 2일 때 점의 개수를 구한 그림이다.
x축이 1이면 `r1`보다 작으므로 반지름이 `r2`인 원을 기준으로 구한 점의 개수 3에서 반지름이 `r1`인 원을 기준으로 구한 점의 개수 1을 뺀 2를 `answer`에 더한다.
x축이 2이면 `r1`과 같으므로 `r2`인 원을 기준으로 구한 점의 개수 3을 `answer`에 더한다.

![](https://velog.velcdn.com/images/nullyng/post/125bffd4-e61c-4082-b787-740eb7b4e9a4/image.jpeg)

x축이 3일 때 점의 개수는 2개이며 여기까지 제1사분면에 해당하는 점은 총 7개가 된다. 마지막으로 y=0에 해당하는 점의 개수(`r2-r1+1`)를 `answer`에 더한다.
따라서 한 사분면에 존재하는 점의 개수는 10개이며, 정답은 10\*4로 40개가 된다.

여기서 주의할 점이 한 가지 있는데, 어떤 x축과 `r1`에 해당하는 원이 만나는 점의 y좌표가 딱 정수로 떨어지는 경우이다.

<img src="https://velog.velcdn.com/images/nullyng/post/5fb80d19-50dd-4778-a03c-abca7600609c/image.jpeg" width="800px">

이런 경우 그 좌표에 해당하는 점 또한 포함해야 하므로 이 점에 주의해서 코드를 작성해야 한다.
