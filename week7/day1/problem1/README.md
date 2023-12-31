# 문제 개요

문제: [[1차] 캐시](https://school.programmers.co.kr/learn/courses/30/lessons/17680)

분류: 2018 KAKAO BLIND RECRUITMENT

난이도: Lv.2

# 문제 풀이

도시 이름은 대소문자 구분을 하지 않는다고 했으므로 주어진 도시 배열의 모든 문자열을 소문자로 변환하여 사용한다.

캐시 크기가 0이면 모든 원소에 대해 cache miss가 나므로 도시 개수만큼 5를 곱한 값을 반환하고, 그렇지 않다면 모든 도시에 대해 아래를 수행한다.

1. 캐시에 해당 도시가 있는지 검색한다.
2. 캐시에 해당 도시가 있다면
   1. cache hit이므로 실행 시간에 1을 더한다.
   2. 해당 도시를 캐시에서 삭제한다.
   3. 캐시에 해당 도시를 push한다.
3. 캐시에 해당 도시가 없다면
   1. cache miss이므로 실행 시간에 5를 더한다.
   2. 만약 캐시가 꽉 차있다면 가장 오랫동안 참조되지 않은 도시를 캐시에서 삭제한다.
   3. 캐시에 해당 도시를 push한다.

마지막으로 실행 시간을 반환하면 정답이 된다.
