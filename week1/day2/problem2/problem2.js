function solution(keymap, targets) {
  let answer = [];
  const map = new Map();

  for (let i = 0; i < 26; i++) {
    let alphabet = String.fromCharCode(65 + i);
    let minPressCount = Number.MAX_VALUE;

    keymap.forEach((key) => {
      let index = key.indexOf(alphabet);
      if (index > -1) minPressCount = Math.min(minPressCount, index);
    });
    if (minPressCount === Number.MAX_VALUE) continue;

    map.set(alphabet, minPressCount + 1);
  }

  targets.forEach((target) => {
    let sum = 0;
    let flag = true;

    for (let i = 0; i < target.length; i++) {
      if (!map.get(target[i])) {
        flag = false;
        break;
      }
      sum += map.get(target[i]);
    }

    if (flag) answer.push(sum);
    else answer.push(-1);
  });

  return answer;
}
