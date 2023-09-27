function solution(plans) {
  let answer = [];
  let stack = [];

  // 시작하는 시간을 분 단위로 바꾼다.
  // ex) 12:40 -> 760
  plans.forEach(([name, start, playtime], idx) => {
    let [hour, minute] = start.split(":").map(Number);
    plans[idx] = [name, hour * 60 + minute, +playtime];
  });

  // 시작하는 시간이 빠른 순으로 정렬한다.
  plans.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < plans.length - 1; i++) {
    let [name, start, playtime] = plans[i];
    let restTime = plans[i + 1][1] - (start + playtime);

    if (restTime >= 0) {
      // 다음 과제 시작 전까지 과제를 끝낼 수 있다면 정답에 추가한다.
      answer.push(name);

      // 딱 맞게 끝냈다면 다음 과제로 넘어가고,
      if (restTime === 0) continue;

      // 그렇지 않다면 스택에서 하나씩 꺼내며 수행할 수 있는 과제를 수행한다.
      while (stack.length > 0 && restTime > 0) {
        let [sName, sPlaytime] = stack.pop();

        if (sPlaytime <= restTime) {
          // 남는 시간 안에 과제를 끝낼 수 있다면
          // 정답에 추가하고 남는 시간에서 과제를 수행한 시간을 뺀다.
          answer.push(sName);
          restTime -= sPlaytime;
        } else {
          // 과제를 수행하는 시간이 남는 시간보다 길다면
          // 과제를 수행하는 시간에서 남는 시간만큼 빼고 다시 스택에 넣는다.
          sPlaytime -= restTime;
          restTime = 0;
          stack.push([sName, sPlaytime]);
        }
      }
    } else {
      // 다음 과제 시작 전까지 과제를 끝낼 수 없다면 남는 시간을 스택에 push한다.
      stack.push([name, -1 * restTime]);
    }
  }

  // 마지막 과제를 스택에 추가한다.
  stack.push([plans[plans.length - 1][0], plans[plans.length - 1][2]]);

  while (stack.length > 0) {
    answer.push(stack.pop()[0]);
  }

  return answer;
}
