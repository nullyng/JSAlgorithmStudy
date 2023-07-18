# 문제 개요

**문제:** [대충 만든 자판](https://school.programmers.co.kr/learn/courses/30/lessons/160586#)

**출처:** 프로그래머스

**난이도:** Lv.1

# 문제 풀이

1. map에 알파벳별로 키를 눌러야 하는 최소 횟수를 저장한다.
2. 문자열을 탐색할 때 map에서 해당하는 문자를 참조하여 최소 횟수를 더하여 정답을 구한다.

1번 과정에서는 알파벳 A부터 Z까지 각각 keymap을 순환하며 `indexOf`를 통해 키를 눌러야 하는 최소 횟수를 구한다.  
이때 `indexOf`는 인덱스를 반환하므로 반환된 값에 +1을 해준 것이 실제로 키를 눌러야 하는 횟수이다.

또한 2번 과정에서 map을 참조했을 때 그 문자에 해당하는 key가 없다면 해당 문자열은 작성할 수 없으므로 정답 배열에 -1을 push한다.

# 알게 된 점

## 문자-아스키코드 변환

1. 문자를 아스키코드로 변환하기

   - `charCodeAt(아스키 코드로 변환할 문자의 인덱스)`

     ```jsx
     let str = "ABC";

     console.log(str.charCodeAt(0)); // 65
     console.log(str.charCodeAt(1)); // 66
     console.log(str.charCodeAt(2)); // 67
     ```

2. 아스키코드를 문자로 변환하기
   - `String.fromCharCode(변환할 아스키 코드)`
     ```jsx
     console.log(String.fromCharCode(65)); // A
     console.log(String.fromCharCode(65, 66, 67)); // ABC
     ```

## 최대/최소 Number 값

- `Number.MAX_SAFE_INTEGER` → 자바스크립트에서 안전한 최대 정수 값
- `Number.MIN_SAFE_INTEGER` → 자바스크립트에서 안전한 최소 정수 값
- `Number.MAX_VALUE` → 자바스크립트가 표현할 수 있는 제일 큰 양의 숫자 값

```jsx
const max_safe = Number.MAX_SAFE_INTEGER; // 9007199254740991
const min_safe = Number.MIN_SAFE_INTEGER; // -9007199254740991
const max = Number.MAX_VALUE; //1.7976931348623157e+308
```

## 참고

🔗 [문자-아스키코드 변환](https://xively.tistory.com/68)  
🔗 [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)  
🔗 [Number.MIN_SAFE_INTEGER](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER)  
🔗 [Number.MAX_VALUE](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE)
