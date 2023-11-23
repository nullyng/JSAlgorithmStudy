# 문제 개요

문제: [가장 큰 수](https://school.programmers.co.kr/learn/courses/30/lessons/42746)

분류: 정렬

난이도: Lv.2

# 문제 풀이

정렬 기준을 어떻게 할지 고민하다가 [다른 사람 풀이](https://velog.io/@fastpace04/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4JavaScript-%EA%B0%80%EC%9E%A5-%ED%81%B0-%EC%88%98)를 참고했다.

처음에는 모든 수를 문자열로 변환하고 자리별로 숫자를 비교했는데 막상 코드를 짜니까 1~6번 테스트케이스를 통과하지 못했다. 알고보니 비교하는 문자열 `a`와 `b`를 합친 것을 비교하면 되는 간단한 문제였다.

예를 들어 “54”와 “554”가 있다면 “54554”와 “55454”를 비교하는 것이다. 그런데 큰값이 먼저 오도록 정렬해야 하므로 `(a+b)-(b+a)`가 아닌 `(b+a)-(a+b)`를 반환하도록 한다.

또한 결과 배열을 바로 join해서 반환하는 것이 아니라 join한 값이 0인지 아닌지 확인한 후 0이면 “0”을 반환하도록 해야 한다. 그렇지 않으면 11번 테스트케이스를 통과하지 못한다.