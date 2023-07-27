function solution(survey, choices) {
  let answer = "";
  let personality = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  choices.forEach((choice, idx) => {
    if (choice < 4) {
      survey[idx] = survey[idx].substring(0, 1);
    } else {
      survey[idx] = survey[idx].substring(1);
    }

    let score = 0;

    switch (choice) {
      case 1:
      case 7:
        score = 3;
        break;
      case 2:
      case 6:
        score = 2;
        break;
      case 3:
      case 5:
        score = 1;
        break;
    }

    personality[survey[idx]] += score;
  });

  answer += personality["R"] >= personality["T"] ? "R" : "T";
  answer += personality["C"] >= personality["F"] ? "C" : "F";
  answer += personality["J"] >= personality["M"] ? "J" : "M";
  answer += personality["A"] >= personality["N"] ? "A" : "N";

  console.log(personality);

  return answer;
}
