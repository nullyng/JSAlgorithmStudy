# 문제 개요

**문제:** [숫자 문자열과 영단어](https://school.programmers.co.kr/learn/courses/30/lessons/81301?language=javascript)

**출처:** 프로그래머스

**난이도:** Lv.1

# 문제 풀이

[다른 사람 풀이](https://school.programmers.co.kr/questions/51392)를 참고했다.

영단어를 key로 하고 숫자를 value로 하는 객체를 미리 생성해둔다. 그리고 이 객체에서 key와 value를 뽑아 배열로 만든다.

```js
const alphabets = Object.keys(obj);
const numbers = Object.values(obj);
```

`alphabets`에서 영단어를 하나씩 꺼내며 정규표현식 객체를 만들고, `replace()`의 파라미터로 정규표현식 객체를 넘겨 해당하는 모든 문자열을 숫자로 치환한다.

# 알게 된 점

## replace와 RegExp 객체를 이용하여 해당하는 모든 문자열을 치환, 제거하기

```js
str = str.replace(/@/g, "");
```

위 코드는 `str` 문자열에서 모든 @를 제거한다. 이때 @ 대신 다른 문자를 유동적으로 받고자 변수를 넣으면 제대로 동작하지 않는다.

```js
let letter = "@";
str = str.replace(/letter/g, "");
```

위 코드의 경우 @가 아닌 letter를 찾아 제거한다.

이를 해결하기 위해서는 **RegExp 객체**를 활용할 수 있다.

```js
let regexOne = new RegExp(pattern); // 일치하는 패턴 중 최초 등장하는 패턴 한 번만 찾음
let regexAll = new RegExp(pattern, "g"); // 모든 패턴을 찾음
let regexAllCase = new RegExp(pattern, "gi"); // 대소문자 구분 없이 모든 패턴을 찾음
```

따라서 아래와 같이 `replace` 메서드와 같이 사용하면 변수를 받아서 문자열을 치환, 제거하는 것이 가능하다.

```js
let letter = "@";
let regexAllCase = new RegExp(letter, "gi");
str = str.replace(regexAllCase, "");
```

## 참고

🔗 [replace와 RegExp 객체를 이용하여 해당하는 모든 문자열을 치환, 제거하기](https://cookinghoil.tistory.com/95)
