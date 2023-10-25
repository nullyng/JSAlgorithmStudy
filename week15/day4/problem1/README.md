# 문제 개요

문제: [할인 행사](https://school.programmers.co.kr/learn/courses/30/lessons/131127)

분류: 연습문제

난이도: Lv.2

# 문제 풀이

객체 `discountObj`를 선언하고 할인하는 제품의 종류를 저장한다.
그리고 할인하는 날짜만큼 해당 객체를 갖는 배열 `discountObjArr`를 선언한다.

`discountObjArr`에는 `discountObj`에 할인하는 제품의 개수를 누적하여 더한 값을 저장한다.

예를 들어 정현이가 원하는 제품이 바나나, 사과, 쌀이고 할인하는 제품이 “banana”, “banana”, “apple”, …이라면 `discountObj`와 `discountObjArr`에는 아래와 같이 저장된다.

- discountObj = { “apple”: 0, “banana”: 0, “rice”: 0 }
- discountObjArr[0] = {”apple”: 0, “banana”: 1, “rice”: 0}
- discountObjArr[1] = {”apple”: 0, “banana”: 2, “rice”: 0}
- discountObjArr[2] = {”apple”: 1, “banana”: 2, “rice”: 0}
- …

하지만 **10일 연속**으로 일치하는 경우를 찾아야하므로 `discountObjArr`의 각 객체에서 해당 날짜에서 10일 이전의 누적 합은 제외해야 한다.

- discountObjArr[10] = discountObjArr[10] - discountObjArr[0]
- discountObjArr[11] = discountObjArr[11] - discountObjArr[1]

마지막으로 `discountObjArr`를 순차적으로 탐색하며 원하는 제품을 모두 할인받을 수 있는 날짜의 수를 세아린다.
