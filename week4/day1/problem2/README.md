# 문제 개요

문제: [완주하지 못한 선수](https://school.programmers.co.kr/learn/courses/30/lessons/42576)

분류: 해시

난이도: Lv.1

# 문제 풀이

`includes()`를 사용해서 풀었다가 효율성 테스트를 통과하지 못해 [다른 사람 풀이](https://school.programmers.co.kr/questions/51404)를 참고했다.

선수들의 이름을 key로 하고 value로 1을 갖는 객체를 생성한다. 만약 동명이인이 있다면 그만큼 value를 증가시킨다.

이후 완주한 선수 목록에 있는 선수는 선수 객체의 값을 감소시키는데, 이때 그 값이 0이 되면 객체에서 해당하는 값을 삭제한다.

마지막으로 선수 객체의 key를 배열로 만들고 첫 번째 원소를 반환한다.
