# 문제 개요

문제: [주차 요금 계산](https://school.programmers.co.kr/learn/courses/30/lessons/92341)

분류: 2022 KAKAO TECH INTERNSHIP

난이도: Lv.2

# 문제 풀이

총 세 가지의 객체에 정보를 저장하며 문제를 풀었다.

- `parkingObj` : 차량별 입차 정보를 저장하는 객체
- `totalTimeObj` : 차량별 총 주차 시간을 저장하는 객체
- `totalFeesObj` : 차량별 총 요금을 저장하는 객체

우선 주어진 기록을 통해 차량의 입차 시각을 `parkingObj`에 저장한다. 만약 어떤 차량이 출차했다면 주차 시간을 구해서 `totalTimeObj`에 누적하고 `parkingObj`에서 해당 차량에 대한 원소를 삭제한다.

모든 기록을 살핀 후 `parkingObj`에 남은 원소가 있다면 해당 차량들은 23:59에 출차한 것으로 간주하여 주차 시간을 구하고, 마찬가지로 `totalTimeObj`에 누적한다.

마지막으로 `totalTimeObj`를 통해 각 차량의 총 주차 시간에 따른 요금을 계산하여 `totalFeesObj`에 저장한다. `totalFeesObj`를 배열로 변환하여 key(차량 번호)를 기준으로 오름차순 정렬하고, key에 해당하는 value(주차 요금)를 배열로 반환하면 정답이 된다.

# 덧붙이는 말

첫 번째 코드(`problem1-1.js`)는 빠르게 푸는 걸 목표로 기능 구현에 집중했고 두 번째 코드(`problem1-2.js`)는 첫 번째 코드 작성 후에 중복 코드나 불필요한 부분을 줄인 코드이다. 앞으로도 코드가 복잡해지면 이런 식으로 예쁘게 코드를 다듬는 시간도 가지면 좋을 것 같다.
