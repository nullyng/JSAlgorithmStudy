function solution(lottos, win_nums) {
  let lottoObj = {
    0: 6,
    1: 6,
    2: 5,
    3: 4,
    4: 3,
    5: 2,
    6: 1,
  };
  let correct = 0;
  let unknown = 0;
  lottos.forEach((lotto) => {
    if (win_nums.includes(lotto)) correct++;
    if (lotto === 0) unknown++;
  });

  return [lottoObj[correct + unknown], lottoObj[correct]];
}
