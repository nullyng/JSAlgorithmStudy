function solution(dirs) {
  let set = new Set();
  let [currY, currX] = [0, 0];

  for (let i = 0; i < dirs.length; i++) {
    let prev = "" + currY + currX;

    if (dirs[i] === "U" && currY - 1 >= -5) currY--;
    else if (dirs[i] === "D" && currY + 1 <= 5) currY++;
    else if (dirs[i] === "L" && currX - 1 >= -5) currX--;
    else if (dirs[i] === "R" && currX + 1 <= 5) currX++;
    else continue;

    set.add("" + currY + currX + prev);
    set.add(prev + currY + currX);
  }

  return set.size / 2;
}
