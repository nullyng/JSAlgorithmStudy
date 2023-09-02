# 문제 개요

문제: [튜플](https://school.programmers.co.kr/learn/courses/30/lessons/64065)

분류: 2019 카카오 개발자 겨울 인턴십

난이도: Lv.2

# 문제 풀이

가장 원소의 개수가 작은 집합부터 살펴보면서 현재 set에 없는 수만 set에 추가한다.

1. **문자열에서 집합 뽑아내기**: `“{”`와 `“}”`를 기준으로 문자열을 자르고, 자른 문자열에서 빈 문자열이나 `“,”`인 것을 제외한다.
2. **집합을 크기순으로 정렬하기**: 배열을 문자열(집합)의 길이 순으로 오름차순 정렬한다.
3. **set에 튜플의 원소 추가하기**: 정렬한 배열에서 집합의 원소를 하나씩 살펴보며 set에 없는 수를 set에 추가한다.

마지막으로 set을 배열로 변환하여 출력한다.

## Set to Array

1. `Array.from()` 메서드를 사용한다.

   ```jsx
   const set = new Set([2, 1, 3]);
   console.log(Array.from(set)); // [2, 1, 3]
   ```

2. 스프레드 연산자를 사용한다.

   ```jsx
   const set = new Set([2, 1, 3]);
   console.log([...set]); // [2, 1, 3]
   ```

## 참고

🔗 [Set to Array](https://codechacha.com/ko/javascript-convert-set-to-array/)
