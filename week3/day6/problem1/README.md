# 문제 개요

문제: [DFS와 BFS](https://www.acmicpc.net/problem/1260)

분류: DFS, BFS

난이도: 브론즈5

# 문제 풀이

아직 VSCODE에서 자바스크립트로 입력값을 받는 게 익숙지 않아서 [다른 사람 풀이](https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-1260-DFS%EC%99%80-BFS-javascript)를 참고했다.

주어진 그래프에 대한 DFS 결과와 BFS 결과를 반환한다.

# 알게 된 점

## VS CODE에서 입력값 받기

Node.js와 VS CODE의 확장 프로그램 중 Code Runner가 필요하다.

백준과 같은 온라인 저지 코딩 테스트에 맞게 문제를 풀기 위해서는 데이터 입력 시 아래와 같은 코드가 필요했다.

```jsx
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
```

하지만 VS CODE에서 혼자 문제를 풀이할 때는 입력 받을 데이터에 대한 텍스트 파일을 만들어서 이를 불러와야 한다. 하지만 백준에 풀이를 제출할 때 계속해서 수정하기 번거로우므로 파일 경로를 변수로 따로 빼서 아래와 같이 사용할 수 있다. (백준의 채점 서버가 리눅스 환경이기 때문인듯 하다)

```jsx
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
```

이후 실행하려는 파일이 있는 경로로 가서 터미널에 `node 파일명.js`를 입력하면 파일이 실행되면서 `console.log()`로 찍은 값이 출력된다.

## 참고

🔗 [VSCODE에서 입력값 받기(1)](https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-1260-DFS%EC%99%80-BFS-javascript)

🔗 [VSCODE에서 입력값 받기(2)](https://justdojustin.tistory.com/13)
