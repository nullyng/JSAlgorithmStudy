# 문제 개요

문제: [문자열 폭발](https://www.acmicpc.net/problem/9935)

분류: 문자열, 스택

난이도: 골드4

# 문제 풀이

1. 주어진 문자열의 문자를 차례대로 탐색한다.
2. 스택에 현재 문자를 push한다.
3. 스택의 top과 폭발 문자열의 마지막 문자를 비교한다.
   - 만약 같다면 스택에서 폭발 문자열의 길이만큼 꺼내고 폭발 문자열과 비교하여 같은 경우 그만큼 스택에서 pop한다.
4. 모든 문자에 대한 탐색이 종료되면 스택에 들어있는 값을 출력한다.
   - 만약 스택이 비어있다면 “FRULA”를 출력한다.

# 알게 된 점

## Array.prototype.slice() vs Array.prototype.splice()

### arr.slice(start[, end])

- `start`부터 `end` 이전까지 추출해서 새로운 배열을 반환한다.
- **원본 배열은 바뀌지 않는다.**

### arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])

- `start`부터 `deleteCount`만큼 **원본 배열에서 삭제한다.**
- 삭제한 요소들이 담긴 새로운 배열을 반환한다.
- `item1, item2, ...`를 파라미터로 넘길 경우 이들을 배열에 추가한다.
