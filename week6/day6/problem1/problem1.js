function solution(m, musicinfos) {
  let answer = ["(None)", 0];

  // # 붙은 음을 소문자로 치환한다.
  m = m.replace(/(C|D|E|F|G|A)#/g, (_, a) => a.toLowerCase());

  musicinfos.forEach((info) => {
    let [startTime, endTime, title, note] = info.split(",");

    // 재생 시간, 분 계산
    let hour = endTime.slice(0, 2) - startTime.slice(0, 2);
    let minute = endTime.slice(3) - startTime.slice(3);
    let totalTime = hour * 60 + minute;

    // # 붙은 음을 소문자로 치환한다.
    note = note.replace(/(C|D|E|F|G|A)#/g, (_, a) => a.toLowerCase());

    // 악보를 시간만큼 재생할 수 있을 떄까지 더한다.
    note += note.repeat(Math.ceil(totalTime / note.length));
    // 악보를 정확한 시간만큼 자른다.
    note = note.slice(0, totalTime);

    if (note.includes(m)) {
      // if: 조건이 일치하는 음악이 여러 개일 때 재생된 시간이 제일 긴 음악 제목을 반환한다.
      if (answer[1] < totalTime) answer = [title, totalTime];
    }
  });

  return answer[0];
}
