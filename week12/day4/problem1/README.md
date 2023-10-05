# 문제 개요

문제: [호텔 대실](https://school.programmers.co.kr/learn/courses/30/lessons/155651)

분류: 연습문제

난이도: Lv.2

# 문제 풀이

우선순위 큐를 사용하여 풀이했다.

우선 편한 계산을 위해 입력된 시간들을 분 단위로 변환한다. 이때 퇴실 시간은 10분을 더한 값을 저장한다.

이후 시작 시간을 기준으로 예약 시각을 오름차순 정렬하고, 정렬된 가장 앞 예약에 대한 퇴실 시각을 우선순위 큐에 추가한다.

그 다음 예약부터 마지막 예약까지, 각 예약의 시작 시간이 우선순위 큐의 가장 앞에 있는 시간(퇴실 시간)보다 크거나 같다면 같은 객실을 사용할 수 있다는 의미이므로 큐를 pop한다. 그리고 현재 예약의 퇴실 시간을 큐에 push한다.

즉 우선순위 큐에는 계속해서 가장 빠른 퇴실 시간이 첫 번째 원소로 오게 되고, 이 시간이 현재 예약에 대한 입실 시간보다 작거나 같을 때만 같은 객실을 이어서 사용할 수 있게 되는 것이다.

마지막에 우선순위 큐에 남은 원소의 개수가 필요한 최소 객실 수가 된다.

# 알게 된 점

## 자바스크립트에서 우선순위 큐 구현하기

자바스크립트에는 우선순위 큐가 구현되어 있지 않으므로 직접 구현하여 사용해야 한다.

최소 힙을 사용하여 우선순위 큐에서 제공하는 기능을 구현할 수 있다.

```jsx
class PriorityQueue {
	constructor() { ... }
	empty() { ... }    // 시간복잡도 O(1)
	peek() { ... }     // 시간복잡도 O(1)
	push() { ... }     // 시간복잡도 O(logN)
	pop() { ... }	     // 시간복잡도 O(logN)
	_heapify() { ... } // 시간복잡도 O(logN)
}
```

### constructor()

생성자를 통해 내부에 heap 배열을 생성한다.

```jsx
constructor() {
	this.heap = [];
}
```

### empty()

우선순위 큐가 비어있는지 여부를 반환한다.

```jsx
empty() {
	return this.heap.length === 0;
}
```

### peek()

우선순위 큐의 가장 앞 요소를 반환한다.

```jsx
peek() {
	return this.heap[0];
}
```

### push(data)

data를 heap 배열에 추가하고 이를 부모와 비교하며 최소 힙을 만든다.

```jsx
push(data) {
	this.heap.push(data);

	let i = this.heap.length - 1;
	while (i > 0) {
	const parent = ~~((i - 1) / 2); // ~~N === Math.floor(N)
    // 부모와 자식을 비교하고 부모가 자식보다 이미 작거나 같으면 그만둔다.
    if (this.heap[parent] <= this.heap[i]) break;
    // 부모와 자식의 자리를 바꾼다.
    [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
    i = parent;
  }
}
```

### pop()

우선순위 큐의 가장 앞 요소를 제거한다.

이후 `_heapify()` 메서드를 호출하여 최소 힙을 만든다.

```jsx
pop() {
  if (this.empty()) return;

  const value = this.peek();
  // 루트와 가장 마지막 원소의 자리 바꾸기
  [this.heap[0], this.heap[this.heap.length - 1]] = [
    this.heap[this.heap.length - 1],
    this.heap[0],
  ];

  this.heap.pop();
  this._heapify();
  return value;
}
```

### \_heapify()

왼쪽 자식과 오른쪽 자식 중 값이 더 작은 자식을 찾고 이를 부모와 비교하며 최소 힙을 만든다.

```jsx
_heapify() {
  const x = this.peek();
  const n = this.heap.length;
  let curr = 0;

  // 자식이 있는동안
  while (2 * curr + 1 < n) {
    const leftChild = 2 * curr + 1;
    const rightChild = leftChild + 1;
    const smallerChild =
      rightChild < n && this.heap[rightChild] < this.heap[leftChild]
        ? rightChild
        : leftChild;

    // 루트 노드의 값이 더 큰 경우 swap
    if (x > this.heap[smallerChild]) {
      [this.heap[curr], this.heap[smallerChild]] = [
        this.heap[smallerChild],
        this.heap[curr],
      ];
      curr = smallerChild;
    } else break;
  }
}
```

## 전체 코드

```jsx
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  empty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.heap[0];
  }

  push(data) {
    this.heap.push(data);

    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = ~~((i - 1) / 2);
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
      i = parent;
    }
  }

  pop() {
    if (this.empty()) return;

    const value = this.peek();
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];

    this.heap.pop();
    this._heapify();
    return value;
  }

  _heapify() {
    const x = this.peek();
    const n = this.heap.length;
    let curr = 0;

    while (2 * curr + 1 < n) {
      const leftChild = 2 * curr + 1;
      const rightChild = leftChild + 1;
      const smallerChild =
        rightChild < n && this.heap[rightChild] < this.heap[leftChild]
          ? rightChild
          : leftChild;

      if (x > this.heap[smallerChild]) {
        [this.heap[curr], this.heap[smallerChild]] = [
          this.heap[smallerChild],
          this.heap[curr],
        ];
        curr = smallerChild;
      } else break;
    }
  }
}
```

## 틸트(tilde, ~) 연산자

틸트 연산 시 내부적으로 32비트 정수로 변환한 후 NOT 연산자를 실행하는데, 그 값은 `-(n+1)`과 같다.

```jsx
9;
~9; // -10
```

이를 활용하여 `indexOf()`의 참 거짓을 처리할 수 있다.

```jsx
let str = "마지막 땀방울의 결말은";
let val = "땀";

// 있다면 -(n+1)의 값을 반환, 없다면 0을 반환
if (~str.indexOf(val)) {
  console.log("헛된 길이 아닐 걸 잘 알아");
} else {
  console.log("");
}
```

틸트 연산자 두 개를 이어서 쓰면(`~~`) `Math.floor()`와 동등하게 쓰인다.

```jsx
let num = "2023.1005";

console.log(~~num); // 2023
```

틸트 연산 시 정수로 변환하고 NOT 연산을 하기 때문에 이를 두 번 반복함으로써 단순히 소수점을 버리는 것과 같은 연산을 할 수 있다. 이처럼 양수에 대해서 `~~` 연산은 `Math.floor()`와 동등하게 쓰이지만 음수에서는 결과값이 달라질 수 있다.

```jsx
~~52.3; // 52
Math.floor(52.3); // 52

~~-43.2; // 43
Math.floor(-43.2); // 44
```

## 참고

🔗 [자바스크립트에서 우선순위큐 구현하기](https://gyyeom.tistory.com/117)

🔗 [틸트(tilde, ~) 연산자(1)](https://oper0116.tistory.com/40)

🔗 [틸트(tilde, ~) 연산자(2)](https://webclub.tistory.com/21)
