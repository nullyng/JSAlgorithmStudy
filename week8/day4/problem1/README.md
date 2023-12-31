# 문제 개요

문제: [빛의 경로 사이클](https://school.programmers.co.kr/learn/courses/30/lessons/86052)

분류: 월간 코드 챌린지 시즌3

난이도: Lv.2

# 문제 풀이

[다른 사람 풀이](https://velog.io/@tnehd1998/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%B9%9B%EC%9D%98-%EA%B2%BD%EB%A1%9C-%EC%82%AC%EC%9D%B4%ED%81%B4-JavaScript)를 참고했다.

상하좌우 각 방향에서 빛을 쐈을 때 S(직진), L(좌회전), R(우회전)에 따라 다음 이동 방향에 해당하는 인덱스(0~4까지 차례대로 상하좌우)를 배열 `direction`에 미리 저장해둔다.

```jsx
let dy = [1, -1, 0, 0]; // 아래, 위, 오른쪽, 왼쪽
let dx = [0, 0, 1, -1];

// 각 방향에서 빛을 쐈을 때 S, L, R에 따른 이동 방향에 해당하는 dy, dx 인덱스
let direction = [
  [0, 2, 3], // 아래
  [1, 3, 2], // 위
  [2, 1, 0], // 오른쪽
  [3, 0, 1], // 왼쪽
];
```

위 코드와 같이 `direction[0][0]`에는 아래 방향으로 빛을 쐈을 때 빛이 도달한 칸이 “S”라면 계속 직진하여 아래 방향으로 이동해야 하므로 아래 방향에 해당하는 1을 저장한다.

이후에는 모든 칸에 대해 모든 방향에서 빛을 쐈을 때 생기는 사이클을 체크한다. 이때 특정한 위치로 같은 방향의 빛을 쏜 적이 있다면 이미 확인한 사이클이므로 거기까지만 사이클 경로를 체크하고 다음 방향에 대해 새로운 사이클이 있는지 체크한다.

사이클은 각각 행, 열, 방향을 나타내는 3차원 배열 `visited`에서 체크하며, 그리드 첫 번째 칸부터 마지막 칸까지 차례대로 4방향에 대해 수행한다. 한 방향에 대해 사이클 체크를 시작했으면 `visited[다음 행][다음 열][다음 방향]`이 true일 때까지, 즉 사이클의 첫 번째 요소로 돌아올 때까지 미리 정의한 `direction` 배열을 바탕으로 S, L, R 문자에 따라 사이클 경로를 탐색한다. 이 과정에서 사이클 경로의 길이를 구하고 정답 배열에 추가한다.

마지막으로 정답 배열을 오름차순 정렬하여 반환한다.
