function solution(s) {
  let tuple = s.split(/[{|}]/).filter((v) => v !== "" && v !== ",");
  const set = new Set();

  tuple.sort((a, b) => a.length - b.length);

  tuple.forEach((v) => {
    v.split(",").forEach((item) => {
      if (!set.has(+item)) set.add(+item);
    });
  });

  return [...set];
}
