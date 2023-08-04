# 문제 개요

**문제:** [A+B](https://www.acmicpc.net/problem/1000)

**출처:** 백준

**난이도:** 브론즈5

# 문제 풀이

A와 B를 더한 값을 출력한다.

# 알게 된 점

## NodeJS 입력값 받기

1. 입력값이 한 개일 때
   ```js
   const fs = require("fs");
   const input = fs.readFileSync("/dev/stdin").toString().trim();
   ```
2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
   ```js
   /* ex)
   110 78 158
   */
   const fs = require("fs");
   const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
   ```
3. 입력값이 여러 줄일 때
   ```js
   /* ex)
   110
   78
   158
   */
   const fs = require("fs");
   const input = fs.readFileSync("/dev/stdin").toString().trim().split("/n");
   ```
4. 첫 번째 줄에는 입력값의 길이(n), 두 번째 줄에는 공백으로 구분된 입력값이 주어질 때
   ```js
   /* ex)
   3
   110 78 158
   */
   const fs = require("fs");
   const [n, input] = fs
     .readFileSync("/dev/stdin")
     .toString()
     .trim()
     .split("/n");
   const inputArr = input.trim().split(" ");
   ```
5. 첫 번째 줄에는 입력값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
   ```js
   /* ex)
   3
   110
   78
   158
   */
   const fs = require('fs');
   const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n);
   ```

## 참고

🔗 [NodeJS 입력값 받기](https://velog.io/@imysh578/%EB%B0%B1%EC%A4%80-NodeJsJavascript-%EC%9E%85%EB%A0%A5%EA%B0%92-%EB%B0%9B%EB%8A%94-%EB%B0%A9%EB%B2%95)
