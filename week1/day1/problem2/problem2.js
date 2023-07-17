function solution(name, yearning, photo) {
  var answer = [];
  const info = {};

  // 객체에 {이름, 추억 점수}를 저장한다.
  name.forEach((n, idx) => {
    info[n] = yearning[idx];
  });

  // 사진별로 추억 점수의 합을 구한다.
  photo.forEach((names, idx) => {
    let sum = 0;

    names.forEach((name) => {
      if (info[name]) {
        sum += info[name];
      }
    });

    answer.push(sum);
  });

  return answer;
}
