# 문제 개요

**문제:** [실패율](https://school.programmers.co.kr/learn/courses/30/lessons/42889)

**출처:** 프로그래머스

**난이도:** Lv.1

# 문제 풀이

1번부터 `N`번 스테이지까지 각 스테이지에 도전하고 있는 사람의 수를 구하고, 그 수에 따라 실패율을 계산하여 저장한다. 실패율을 저장할 때는 추후 정렬을 위해 해당 스테이지의 번호와 함께 저장한다.

모든 스테이지에 대한 실패율을 구한 이후 문제에서 주어진대로 내림차순으로, 단 실패율이 같다면 스테이지 번호를 기준으로 오름차순으로 정렬한다.

마지막으로 정렬한 스테이지 번호를 정답 배열에 push하여 반환한다.

# 알게 된 점

## 배열 생성과 동시에 초기화하는 방법

`Array.from()`의 첫 번째 매개변수로 `{length: 원하는 길이}` 객체를, 두 번째 매개변수로 초기화하길 원하는 값을 반환하는 콜백함수를 넘겨주면 된다.

```jsx
// 길이가 5, 값이 (0~4)인 배열 생성
const arr1 = Array.from({ length: 5 }, (v, i) => i);
console.log(arr1); // Array(5) [0, 1, 2, 3, 4]

// 콜백함수의 첫 번째 매개변수를 생략하면 undefined 반환
const arr2 = Array.from({ length: 5 }, (i) => i);
console.log(arr2); // Array(5) [undefined, undefined, undefined, undefined, undefined]

// console.log()로 v의 값을 확인해보면 undefined 출력
const arr3 = Array.from({ length: 5 }, (v, i) => {
  console.log(v, i);
  return i;
});
// undefined 0
// undefined 1
// undefined 2
// undefined 3
// undefined 4

// 길이가 5, 값이 ([0,0]~[4,0])인 배열 생성
const arr4 = Array.from({ length: 5 }, (v, i) => [i, 0]);
console.log(arr4); // Array(5) [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]]
```

## 참고

🔗 [배열 생성과 동시에 초기화하는 방법](https://velog.io/@kler/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4-%EC%83%9D%EC%84%B1-%EC%B4%88%EA%B8%B0%ED%99%94-%ED%95%9C%EB%B2%88%EC%97%90-%ED%95%98%EA%B8%B0)

# 덧붙이는 말

처음에는 스테이지별 도전자의 수를 구할 때 별생각없이 `filter()`를 사용하고, `.length`를 통해 도전자의 수를 참조했다. 그런데 `reduce()`를 사용하면 `.length` 없이도 곧바로 도전자의 수를 반환받을 수 있다는 생각이 나서 곧바로 코드를 수정했다.

실행 결과에 큰 차이는 없었지만 `reduce()`를 사용한 쪽이 좀 더 빠르게 실행되는 것을 확인할 수 있었다. 구현하는 건 자유이지만 메서드를 적재적소에 사용할 수 있도록 노력해야겠다는 생각이 들었다.
