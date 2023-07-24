function solution(babbling) {
  let answer = 0;
  let prev = "";

  babbling.forEach((babb) => {
    prev = "";

    while (1) {
      let two = babb.substring(0, 2);
      let three = babb.substring(0, 3);

      if (two === "ye" || two === "ma") {
        if (two === prev) break;
        babb = babb.substring(2);
        prev = two;
      } else if (three == "aya" || three === "woo") {
        if (three === prev) break;
        babb = babb.substring(3);
        prev = three;
      } else break;
    }

    if (babb.length === 0) answer++;
  });

  return answer;
}
