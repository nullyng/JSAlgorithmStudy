# 문제 개요

문제: [k진수에서 소수 개수 구하기](https://school.programmers.co.kr/learn/courses/30/lessons/92335)

분류: 2022 KAKAO BLIND RECRUITMENT

난이도: Lv.2

# 문제 풀이

주어진 수를 k진수로 변환한 뒤 0을 기준으로 문자열을 자르고 이들을 숫자로 변환한다. 각 수에 대해 소수 여부를 판별하고 소수인 것의 개수를 반환한다.

# 알게 된 점

## 자바스크립트의 진수 변환

### 10진수 → k진수: toString(진수)

일반적으로는 특정 객체를 문자열로 반환할 때 사용하지만, 원하는 10진수를 특정 진수로 변환하고 싶을 때 사용할 수 있다. 반환된 값의 타입은 string이다.

```jsx
let number = 3;
console.log(number.toString(2)); // 11

number = 32;
console.log(number.toString(16)); // 20
```

### k진수 → 10진수: parseInt(문자열, 진수)

문자열을 특정 진수에서 10진수로 변환한다. 반환된 값의 타입은 number이다.

```jsx
let binary = "11";
console.log(parseInt(binary, 2)); // 3 (2진수에서 10진수로)

let octal = "1777";
console.log(parseInt(octal, 8); // 1023 (8진수에서 10진수로)
```

## 참고

🔗 [자바스크립트의 진수 변환(1)](https://jae04099.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%A7%84%EC%88%98%EB%B3%80%ED%99%98-toString-parseInt)

🔗 [자바스크립트의 진수 변환(2)](https://jsikim1.tistory.com/161)

# 틀린 이유

테스트케이스 1번만 통과하지 못했는데, 그 이유를 찾다가 [이 블로그 글](https://codejin.tistory.com/223)을 보게 되었다.

나는 여러 수에 대해 소수인지 아닌지를 빠르게 판별하기 위해 에라토스테네스의 체 알고리즘을 사용했다. 하지만 이 문제는 일반 10진수가 아니라 k진수로 변환한 수에 대해 소수 여부를 판별해야 한다. 따라서 문제에서 주어진 `n`의 최댓값인 100만까지만 구하면 될 것이 아니라, 어떤 진수로 변환하느냐에 따라 얼마까지 소수 여부를 판단해야 할지 가늠이 불가능하다.

따라서 에라토스테네스의 체가 아닌 일반적인 소수 판별법을 사용했더니 모든 테스트 케이스를 통과할 수 있었다.
