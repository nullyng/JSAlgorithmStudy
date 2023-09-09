# 문제 개요

문제: [괄호 회전하기](https://school.programmers.co.kr/learn/courses/30/lessons/76502)

분류: 월간 코드 챌린지 시즌2

난이도: Lv.2

# 문제 풀이

괄호 문자열은 총 `s`의 길이만큼 회전시키며, 각 괄호 문자열이 올바른 괄호 문자열인지 판단하기 위해 스택을 사용한다. 동시에 `}}}`와 같이 괄호의 균형이 맞지 않는 경우에 열린 괄호와 닫힌 괄호의 개수가 일치한지 판단해야 한다. 나는 `bracketCnt`라는 변수를 선언하여 사용했다.

- 열린 괄호인 경우 스택에 해당 괄호를 push하고 `bracketCnt`를 증가시킨다.
- 닫힌 괄호인 경우 `bracketCnt`를 감소시킨다.
  - 스택이 비어있다면 pop할 수 없으므로 건너뛴다.
  - 스택이 비어있지 않은 경우에 스택의 top과 현재 괄호를 비교하여 같은 쌍이면 pop한다.

최종적으로 스택이 비어있고 `bracketCnt`가 0인 경우에만 올바른 괄호 문자열이라고 할 수 있다.