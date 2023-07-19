function solution(s, skip, index) {
  for (let i = 0; i < s.length; i++) {
    let temp = index;
    let ascii = s.charCodeAt(i) - 97;

    while (temp-- > 0) {
      ascii = (ascii + 1) % 26;
      if (skip.includes(String.fromCharCode(ascii + 97))) temp++;
    }

    ascii += 97;
    s = s.substring(0, i) + String.fromCharCode(ascii) + s.substring(i + 1);
  }

  return s;
}
