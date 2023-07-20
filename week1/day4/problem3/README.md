# 문제 개요

**문제:** [기사단원의 무기](https://school.programmers.co.kr/learn/courses/30/lessons/136798)

**출처:** 프로그래머스

**난이도:** Lv.1

# 문제 풀이

약수의 개수를 구하고 그 수가 `limit`보다 크다면 `power`를 정답 변수에 더하고 `limit`보다 작다면 약수의 개수를 정답 변수에 더한다.

# 알게 된 점

## 약수와 약수의 개수 구하기

일반적으로 `N`의 약수는 `N`을 1부터 `N`까지 나눴을 때 그 나머지가 0인 수를 찾아서 구할 수 있다. 이 경우 O(N)의 시간 복잡도를 가지는데, **1부터 `N`이 아니라 1부터 `N`의 제곱근까지만 살펴봐도** 약수를 구할 수 있다.

예를 들어 100에 대한 약수를 구할 때 1부터 10까지만 살펴봐도 된다.

- 100%1 == 0 → 100/1 = 100 → 1, 100
- 100%2 == 0 → 100/2 = 50 → 2, 50
- 100%4 == 0 → 100/4 = 25 → 4, 25
- 100%5 == 0 → 100/5 = 20 → 5, 20
- 100%10 == 0 → 10

이렇게 알고리즘을 구현할 경우 O($\sqrt{N}$)의 시간 복잡도를 가진다.

### 약수 구하기

```jsx
function getDivisor(number) {
  const divisor = new Set();

  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      divisor.add(number / i);
      divisor.add(i);
    }
  }

  return divisor;
}
```

위와 같이 set에 저장하여 중복을 제거해도 되지만 `i*i`가 `number`인 경우에는 `number/i`나 `i` 중 하나만 배열에 저장하도록 구현해도 된다.

### 약수의 개수 구하기

```jsx
function getDivisorCnt(number) {
  let divisorCnt = 0;

  for (let i = 1; i * i <= number; i++) {
    if (i * i == number) divisorCnt++;
    else if (number % i == 0) divisorCnt += 2;
  }

  return divisorCnt;
}
```

약수를 구한 후 약수가 저장된 set이나 배열의 크기를 출력해도 되지만 약수의 개수만 구해야 하는 경우 위와 같이 구현할 수 있다.

## 참고

🔗 [약수와 약수의 개수 구하기](https://velog.io/@dankim/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%95%BD%EC%88%98-%EA%B5%AC%ED%95%98%EA%B8%B0-%EA%B8%B0%EB%B3%B8-%EC%A0%9C%EA%B3%B1%EA%B7%BC-Math.sqrt)

# 덧붙이는 말

문제를 풀고 나서 왠지 C++로 코드를 짤 때랑 별반 다를 게 없어 보여서 내가 자바스크립트를 잘 쓰고 있나… 하는 의문에 다른 사람들의 코드를 봤다. 근데 확실히 [다른 분 코드](https://school.programmers.co.kr/questions/51080)를 보니 내가 자바스크립트 메서드(특히 Array 메서드)를 많이 활용을 못하고 있다는 생각이 들었다…^^ 다음부턴 분발하도록 해야지 파이팅~
