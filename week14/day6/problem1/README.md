# 문제 개요

문제: [유사 칸토어 비트열](https://school.programmers.co.kr/learn/courses/30/lessons/148652)

분류: 연습문제

난이도: Lv.2

# 문제 풀이

[다른 사람 풀이](https://moneygear.tistory.com/4)와 [코드](https://dev-gp.tistory.com/163)를 참고했다.

0번째 유사 칸토어 비트열은 "1" 이고, n번째 유사 칸토어 비트열은 n-1번째 유사 칸토어 비트열에서의 1을 11011로 치환하고 0을 00000로 치환하여 만든다.

![](https://velog.velcdn.com/images/nullyng/post/aa99f140-5a34-468a-9472-9a4451f38e8f/image.png)

문제에 따라 유사 칸토어 비트열을 만들어보면 위와 같은 형태로 만들 수 있으며, 이때 각 비트열을 다섯 부분으로 나누었을 때 2번째 인덱스에 해당하는 부분은 항상 0임을 알 수 있다.

![](https://velog.velcdn.com/images/nullyng/post/746f0b31-c947-4ed9-b70c-1c5d57e63ccd/image.png)

idx번째 비트에 대해 해당 자리가 1인지 알기 위해서는 먼저 idx를 5진수로 변환한다. 변환한 수에 2가 포함되어 있다면 이는 2번째 인덱스에 해당하는 부분에 포함된 비트라는 의미로, idx번째 비트는 0이 된다.  
따라서 5진수로 변환한 수에 2가 포함되어 있지 않은 경우에만 개수를 카운트하여 반환하면 정답이 된다.
