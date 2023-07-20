# 문제 개요

**문제:** [명예의 전당 (1)](https://school.programmers.co.kr/learn/courses/30/lessons/138477)

**출처:** 프로그래머스

**난이도:** Lv.1

# 문제 풀이

1. `honor` 배열에 점수를 추가하고 정렬한다.
2. `honor` 배열의 길이가 k보다 크다면 가장 앞 원소를 제거한다.
3. 정답 배열에 `honor` 배열의 첫 번째 원소를 추가한다.

# 알게 된 점

## sort() 함수로 배열 정렬하기

```jsx
arr.sort([compareFunction]);
```

- `compareFunction`: 정렬 순서를 정의하는 함수
  - **이 값이 생략되면 배열 element들은 문자열로 취급되어 유니코드 값 순서대로 정렬됨**
  - 두 개의 배열 element를 파라미터로 입력 받음
  - a, b를 파라미터로 받은 경우 함수가 리턴하는 값이
    - 0보다 작으면 a가 b보다 앞에 오도록 정렬
    - 0보다 크다면 b가 a보다 앞에 오도록 정렬
    - 0과 같다면 a와 b의 순서를 변경하지 않음
- 반환값: `compareFunction` 규칙에 따라 정렬된 배열
  - `sort()` 함수는 **원본 배열을 정렬하고, 원본 배열을 가리키는 배열을 리턴한다.**

### 예시

```jsx
const arr1 = [2, 1, 3];
const arr2 = ['orange', 'banana', 'strawberry'];
const arr3 = [2, 1, 10, 3];

console.log(arr1.sort()); // [1, 2, 3]
console.log(arr2.sort()); // ['banana', 'orange', 'strawberry']
console.log(arr3.sort()); // [1, 10, 2, 3]
console.log(arr3.sort((a, b) => a-b); // [1, 2, 3, 10]

// sort() 함수는 원본 배열을 정렬하고, 원본 배열을 가리키는 배열을 리턴한다.
const arr4 = [3, 1, 2];
const arr5 = arr4.sort();

console.log(arr4); // [1, 2, 3]
console.log(arr5); // [1, 2, 3]

arr4.push(4);
console.log(arr4); // [1, 2, 3, 4]
console.log(arr5); // [1, 2, 3, 4]
```

### 참고

🔗 [sort() 함수로 배열 정렬하기](https://hianna.tistory.com/409)
