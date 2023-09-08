function solution(numbers) {
  return numbers.map((number) => {
    if (number % 2 === 0) return number + 1;

    let bit = "0" + number.toString(2);
    let idx = bit.lastIndexOf("0");
    return parseInt(`${bit.slice(0, idx)}10${bit.slice(idx + 2)}`, 2);
  });
}
