# 문제 개요

문제: [[3차] 방금그곡](https://school.programmers.co.kr/learn/courses/30/lessons/17683)

분류: 2018 KAKAO BLIND RECRUITMENT

난이도: Lv.2

# 문제 풀이

문제 풀이는 스스로 했는데 코드를 다듬는 과정에서 [다른 사람 코드](https://school.programmers.co.kr/questions/47291)를 참고했다.

악보에 사용되는 음은 C#과 같이 두글자짜리도 있는데, 각 음은 1분에 1개씩 재생된다고 했으므로 추후에 연산하기 편하도록 네오가 기억한 멜로디와 방송된 곡에서 #이 붙은 음들은 각각 소문자로 치환한다. (C#→c)

방송된 곡이 재생된 전체 시간을 분 단위로 구하고, 악보를 그 시간만큼 재생할 수 있을만큼 충분히 반복한 후 정확한 시간만큼 악보를 자른다. 이 악보에서 네오가 기억한 멜로디가 있다면 정답을 갱신한다.

# 알게 된 점

## replace()의 두 번째 파라미터에 함수 넘기기

replace()의 두 번째 인자에는 치환할 “문자열”만 가능한줄 알았는데 함수도 가능하다고 한다.

매치된 문자열은 함수가 반환하는 값으로 치환된다.

```jsx
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

- `match` : 매치된 문자열
- `p1`, `p2`, … : 매치된 문자열 중 그룹. 정규식에서 ()로 묶여진 것
  - ex) `/(\a+)(\b+)/`이라는 패턴에서 `p1`은 `\a+`, `p2`는 `\b+`가 된다.
- `offset` : 전체 대상 문자열에서 매치된 문자열의 offset index
- `string` : 전체 대상 문자열

## 참고

🔗 [replace()의 두 번째 파라미터에 함수 넘기기](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
