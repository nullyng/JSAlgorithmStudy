# 문제 개요

**문제:** [푸드 파이트 대회](https://school.programmers.co.kr/learn/courses/30/lessons/134240)

**출처:** 프로그래머스

**난이도:** Lv.1

# 문제 풀이

0번 음식은 물이므로 1번 음식부터 현재 음식의 양을 2로 나눈 횟수만큼 정답 문자열에 현재 음식의 번호를 덧붙인다. 이 작업이 끝나면 마지막에 물이 0번 음식이므로 ‘0’을 덧붙인다.

이렇게 완성된 문자열을 뒤집어서 제일 앞 문자인 ‘0’을 제외한 문자열을 정답 문자열에 덧붙이면 정답이 된다.

## 문자열을 역순으로 뒤집기

아래 세 가지 메서드를 사용하여 문자열을 역순으로 뒤집을 수 있다.

- `String.prototype.split()`
- `Array.prototype.reverse()`
- `Array.prototype.join()`

```jsx
function reverseString(str) {
  // 1. split() 메서드를 사용해 새 배열을 반환하기
  let splitString = str.split("");
  // ["h", "e", "l", "l", "o"]

  // 2. reverse() 메서드를 사용해 새 배열의 순서를 뒤집기
  let reverseArray = splitString.reverse();
  // ["o", "l", "l", "e", "h"]

  // 3. join() 메서드를 사용해 배열의 모든 요소를 문자열로 결합하기
  let joinArray = reverseArray.join("");
  // "olleh"

  // 4. 반전된 문자열을 반환하기
  return joinArray; // "olleh"
}

reverseString("hello");
```

위 코드를 한 줄로 작성하면 아래와 같다.

```jsx
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");
```

## 참고

🔗 [문자열을 역순으로 뒤집기](https://www.freecodecamp.org/korean/news/how-to-reverse-a-string-in-javascript-in-3-different-ways/)
