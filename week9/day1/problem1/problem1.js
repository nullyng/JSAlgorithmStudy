function solution(s) {
  let changeCnt = 0;
  let sumOfZero = 0;

  while (s !== "1") {
    let numberOfZero = s.length;
    s = s
      .split("")
      .filter((number) => number === "1")
      .join("");
    sumOfZero += numberOfZero - s.length;
    s = s.length.toString(2);
    changeCnt++;
  }

  return [changeCnt, sumOfZero];
}
