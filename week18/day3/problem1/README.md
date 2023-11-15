# 문제 개요

문제: [하노이의 탑](https://school.programmers.co.kr/learn/courses/30/lessons/12946)

분류: 연습문제

난이도: Lv.2

# 문제 풀이

[다른 사람 풀이](https://velog.io/@jejualrock/%ED%95%98%EB%85%B8%EC%9D%B4%EC%9D%98%ED%83%91)를 참고했다.

1. 상위 `n-1`개의 원판을 가운데 고리로 옮긴다.
2. 왼쪽 고리에 남아있던 `n`번째 원판을 오른쪽 고리로 옮긴다.
3. 가운데 고리로 옮겼던 `n-1`개의 원판을 오른쪽 고리로 옮긴다.

각 단계에서는 옮기려는 원판이 기존에 있던 고리 `from`, 원판을 옮길 고리 `to`, 그리고 아무것도 아닌 남는 고리 `rest`가 존재한다. 이점을 활용하여 각 위치에 알맞은 고리 번호를 넘기며 함수를 재귀적으로 호출한다.

마지막 원판의 경우(`n`=1) 그냥 목표 고리로 옮기면 되기 때문에 `[from, to]`를 반환한다.

![](https://velog.velcdn.com/images/nullyng/post/3f1feab3-df0b-4d0e-8227-b89022bb2dc3/image.png)
