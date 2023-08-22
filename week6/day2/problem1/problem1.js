function solution(record) {
  let userObj = {};
  let answer = [];

  record.forEach((rec, idx) => {
    let [option, userId, nickname] = rec.split(" ");

    if (option === "Enter") {
      userObj[userId] = nickname;
      answer.push(["님이 들어왔습니다.", userId]);
    } else if (option === "Leave") {
      answer.push(["님이 나갔습니다.", userId]);
    } else {
      userObj[userId] = nickname;
    }
  });

  answer = answer.map((record) => userObj[record[1]] + record[0]);

  return answer;
}
