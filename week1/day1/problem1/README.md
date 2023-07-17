# 문제 개요

**문제:** [달리기 경주](https://school.programmers.co.kr/learn/courses/30/lessons/178871)

**출처:** 프로그래머스

**난이도:** Lv.1

# 문제 풀이

맵에 `{선수 이름, 현재 등수}`를 저장하고 이름이 불릴 때(추월할 때)마다 앞 선수와 등수를 바꾸고 맵에서의 등수 값을 업데이트한다.

# 알게 된 점

`new Map()`을 통해 맵을 생성할 수 있다.

- `map.set(key, value)`: key와 value 저장
- `map.get(key)`: key에 해당하는 값 반환, 없으면 undefined
