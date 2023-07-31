function solution(s) {
  let answer = s;
  let obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const alphabets = Object.keys(obj);
  const numbers = Object.values(obj);

  alphabets.forEach((alphabet, idx) => {
    const regex = new RegExp(alphabet, "gi");
    answer = answer.replace(regex, numbers[idx]);
  });

  return Number(answer);
}
