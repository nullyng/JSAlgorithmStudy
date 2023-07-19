# 문제 개요

**문제:** [가장 가까운 같은 글자](https://school.programmers.co.kr/learn/courses/30/lessons/142086)

**출처:** 프로그래머스

**난이도:** Lv.1

# 문제 풀이

객체에 각 알파벳의 가장 최근 위치를 저장하고 이를 참조하여 현재 위치와의 차이를 정답 배열에 push한다.

# 알게 된 점

## 객체에 특정 Key 값이 있는지 확인하기

1. `includes()` 사용

   ```jsx
   const obj = { a: 1, b: 2, c: 3 };

   Object.keys(obj).includes("a"); // true
   Object.keys(obj).includes("d"); // false
   ```

2. `in` 연산자 사용

   ```jsx
   const obj = { a: 1, b: 2, c: 3 };

   "a" in obj; // true
   "d" in obj; // false
   ```

   `in` 연산자를 사용하면 객체의 프로토타입 체인도에 있는 key도 포함해서 확인한다는 문제점이 존재한다.  
   이를 해결하기 위해서는 `includes()`나 `hasOwnProperty()`를 사용해야 한다.

   ```jsx
   obj.prototype.test = false;

   "test" in obj; // true
   ```

3. `hasOwnProperty()` 사용

   ```jsx
   const obj = { a: 1, b: 2, c: 3 };

   obj.hasOwnProperty("a"); // true
   obj.hasOwnProperty("d"); // false
   ```

   이 메서드를 사용하면 직접적인 속성만을 검사할 수 있기 때문에 `in` 연산자에서 발생하는 문제를 해결할 수 있다.

   ```jsx
   obj.prototype.test = true;

   obj.hasOwnProperty("test"); // false
   ```

## 참고

🔗 [객체에 특정 Key 값이 있는지 확인하기](https://gurtn.tistory.com/200)
