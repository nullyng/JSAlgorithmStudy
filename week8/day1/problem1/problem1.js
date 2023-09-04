const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input1.txt";
const [n, ...data] = fs.readFileSync(filePath).toString().trim().split("\n");

const getPermutations = (arr, selectNumber) => {
  let result = [];
  if (selectNumber === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, idx, origin) => {
    let rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    result.push(...permutations.map((v) => [fixed, ...v]));
  });

  return result;
};

const solution = (data) => {
  let friends = ["A", "C", "F", "J", "M", "N", "R", "T"];
  let permutations = getPermutations(friends, 8);

  data.forEach((condition) => {
    const [friend1, friend2, number] = condition.split(/[~|=|<|>]/);
    const op = condition[3];

    permutations = permutations.filter((permutation) => {
      let friend1Idx = permutation.indexOf(friend1);
      let friend2Idx = permutation.indexOf(friend2);
      let distOfFriends = Math.abs(friend1Idx - friend2Idx) - 1;

      if (op === "=" && distOfFriends !== +number) return false;
      else if (op === "<" && distOfFriends >= +number) return false;
      else if (op === ">" && distOfFriends <= +number) return false;

      return true;
    });
  });

  return permutations.length;
};

console.log(solution(data));
