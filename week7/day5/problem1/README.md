# 문제 개요

문제: [수식 최대화](https://school.programmers.co.kr/learn/courses/30/lessons/67257)

분류: 2020 카카오 인턴십

난이도: Lv.2

# 문제 풀이

수식에서 피연산자와 연산자를 빼내서 각 배열에 저장한다.

이후 우선순위가 높은 연산자부터 연산자 배열에서 찾아서 일치하는 연산자가 있다면 그에 해당하는 인덱스를 피연산자 배열에서 조회하여 계산해준다. 매 우선순위마다 피연산자 배열과 연산자 배열을 복사해서 사용하며 연산된 값은 첫 번째 피연산자였던 위치에 저장하고, 두 번째 피연산자와 연산자는 각각의 복사된 배열에서 제거한다.

그렇게 모든 연산이 끝나면 복사된 피연산자 배열의 첫 번째 원소에 최종 값이 저장되고, 이 값의 절댓값과 정답을 비교하여 더 큰 값으로 정답을 갱신한다.

# 덧붙이는 말

`problem1-1.js`는 연산자 우선순위의 모든 경우의 수를 함수를 통해 구한 코드이고 `problem1-2.js`는 직접 모든 경우의 수를 명시적으로 초기화한 코드이다. 아무 생각 없이 첫 번째 코드를 짰는데, 문제를 다시 읽어보니 주어지는 연산자가 세 개 밖에 없길래 두 번째 코드로 수정했다 😅

배열을 복사하고 연산한 값을 배열에서 지워나가는 과정이 낭비라고 생각했다. 그래서 다른 방법을 고민하다가 잘 떠오르지 않아서 [다른 사람 풀이](https://school.programmers.co.kr/questions/54044)를 참고했는데 주어진 수식을 연산자 우선순위 순으로 자르면서 다차원 배열을 만들고(문제에서는 최대 3차원), 이 배열을 중첩 map 함수를 통해 연산자 우선순위 순으로 각각 연산하는 방법이 있었다.

나도 이렇게 자바스크립트 함수를 잘 활용해서 문제를 풀 수 있으면 좋겠다. 앞으로 더 노력해야지…
