# 문제 개요

문제: [다리를 지나는 트럭](https://school.programmers.co.kr/learn/courses/30/lessons/42583)

분류: 스택/큐

난이도: Lv.2

# 문제 풀이

다리를 건너는 중인 트럭(정확히는 트럭의 무게)의 목록을 담는 배열을 선언하고, 다리 위의 상황에 따라 주어진 대기 트럭을 하나씩 배열에 추가한다.

만약 다리가 꽉 차있다면 다리를 건너고 있는 트럭 중 가장 앞에 있는 트럭이 다리를 완전히 벗어난다. 즉, 다리를 건너는 중인 트럭 배열에서 첫 번째 트럭을 제거한다. 그리고 대기 트럭의 가장 앞 트럭과 다리 위 트럭들의 무게 합을 더한 값이 다리가 견딜 수 있는 하중이라면 다음 대기 트럭을 다리 위에 올린다.(다리를 건너는 중인 트럭 목록 배열에 추가한다.) 이때 다리 위 트럭의 무게 합을 변수로 따로 저장해서 관리하기 때문에 그 반대의 경우에는 0을 배열에 추가한다.
이 과정이 1초동안 일어나므로 대기 트럭이 전부 다리 위에 올라갈 때까지 이 과정을 반복하며 시간을 세아린다.

대기 트럭이 전부 다리 위에 올라갔다면 **현재까지 세아린 시간에 다리의 길이를 더한 값을 반환**한다. 마지막 트럭이 다리에 올라간 직후 위 과정을 종료하므로 마지막 트럭이 다리를 벗어나는 데 걸리는 시간까지 더해야 모든 트럭이 다리를 건너는 데 걸리는 시간이 나온다.