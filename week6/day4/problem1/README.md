# 문제 개요

문제: [[3차] 파일명 정렬](https://school.programmers.co.kr/learn/courses/30/lessons/17686)

분류: 2018 KAKAO BLIND RECRUITMENT

난이도: Lv.2

# 문제 풀이

정렬에 필요한 값은 HEAD와 NUMBER 두 개뿐이다. 따라서 HEAD 값과 NUMBER를 구한 후 HEAD 값이 같은 경우 NUMBER에 따라 정렬하고 그렇지 않은 경우 HEAD 값에 따라 정렬한다.

코드를 설명하면 아래와 같다.

1. `search()`를 통해 파일명에서 처음 숫자가 나오는 인덱스를 찾는다.
2. 인덱스를 바탕으로 HEAD를 분리하고 `toLowerCase()`를 통해 소문자로 치환한다.
3. `match()`를 통해 파일명에서 처음 나오는 숫자 문자열을 찾아서 숫자 타입으로 변환하고 NUMBER에 저장한다.

위를 통해 비교 대상 a, b에 대해 각각 HEAD와 NUMBER를 구하고 문제의 조건에 따라 정렬한 값을 반환한다.

# 알게 된 점

## 문자열에서 숫자만 추출하기

### match() 메서드 사용하기

`match()` 메서드를 사용하여 문자열과 정규식이 매치되는 부분을 검색한다. `d+`는 숫자가 1개 이상인 문자열을 의미하며 만약 문자열에 포함된 모든 수를 추출하고 싶다면 `g` 플래그를 사용한다.

```jsx
let found1 = "img12.png".match(/\d+/);
console.log(found1); // '12'

let found2 = "img12.png34".match(/\d+/g);
console.log(found2); // [ '12', '34' ]
```

### replace() 메서드 사용하기

`replace()` 메서드를 사용하여 숫자를 제외한 문자를 빈 문자로 치환한다.

```jsx
let str = "1234JavaScript5678";
let regex = /[^0-9]/g;
let result = str.replace(regex, "");
console.log(result); // 12345678
```

## String.prototype.search()

정규표현식과 문자열 간에 같은 값의 인덱스를 반환한다. 만약 없으면 -1을 반환한다.

```jsx
let str = "hello World!";
let regex = /[A-Z]/g;
console.log(str.search(regex)); // 4
```

## 참고

🔗 [String.prototype.match()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match)

🔗 [문자열에서 숫자만 추출하기 - match() 메서드 사용하기](https://codechacha.com/ko/javascript-extract-number-from-string/)

🔗 [문자열에서 숫자만 추출하기 - replace() 메서드 사용하기](https://cocobi.tistory.com/103)

🔗 [String.prototype.search()](https://haenny.tistory.com/305)
