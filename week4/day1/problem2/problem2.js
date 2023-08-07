function solution(participant, completion) {
  let participantObj = {};

  participant.forEach((name) => {
    if (participantObj[name] === undefined) {
      participantObj[name] = 1;
    } else {
      participantObj[name]++;
    }
  });

  completion.forEach((name) => {
    participantObj[name]--;
    if (participantObj[name] === 0) delete participantObj[name];
  });

  return Object.keys(participantObj)[0];
}
