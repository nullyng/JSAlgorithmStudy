# 문제 개요

**문제:** [키패드 누르기](https://school.programmers.co.kr/learn/courses/30/lessons/67256)

**출처:** 프로그래머스

**난이도:** Lv.1

# 문제 풀이

현재 왼손과 오른손의 위치는 마지막으로 누른 키패드의 행과 열로 관리한다.  
따라서 초기 왼손의 위치는 [3, 0]이며 초기 오른손의 위치는 [3, 2]이다.

또한 키패드의 각 키에 대한 행과 열을 객체로 관리하여 쉽게 접근할 수 있도록 했다.

순서대로 누를 번호가 담긴 배열을 순회하며 switch 문으로 현재 누르려는 번호에 따라 아래와 같이 분기 처리한다.

- 1, 4, 7의 경우 왼손의 위치를 해당하는 번호로 옮기고 정답 문자열에 “L”을 덧붙인다.
- 3, 6, 9의 경우 오른손의 위치를 해당하는 번호로 옮기고 정답 문자열에 “R”을 덧붙인다.
- 2, 5, 8, 0의 경우 해당하는 키와 현재 왼손, 오른손의 거리 차이를 각각 구하고 이에 따라(+왼손/오른손잡이 여부에 따라) 왼손이나 오른손의 현재 위치 정보와 정답 문자열을 업데이트한다.

여기서 `setLeft()`, `setRight()`와 같이 왼손과 오른손의 현재 위치 정보와 정답 문자열을 업데이트하는 로직을 함수로 묶어서 코드 중복을 줄였다.