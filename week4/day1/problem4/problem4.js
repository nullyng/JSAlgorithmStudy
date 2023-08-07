function solution(n, arr1, arr2) {
  let answer = [];

  const getBinaryStr = (number) => {
    let binaryStr = "";

    while (number > 0) {
      binaryStr += (number % 2).toString();
      number = Math.floor(number / 2);
    }
    // 현재 이진수 문자열의 길이가 n보다 작다면 그만큼 0을 추가해준다.
    binaryStr += "0".repeat(n - binaryStr.length);

    return binaryStr.split("").reverse().join("");
  };

  for (let i = 0; i < n; i++) {
    let or = arr1[i] | arr2[i]; // 각 지도에서 암호를 꺼내 or 연산을 한다.
    let binaryStr = getBinaryStr(or); // or 연산한 값을 이진수로 변환한다.
    // 0은 " ", 1은 "#"으로 치환하여 정답 배열에 push한다.
    answer.push(binaryStr.replace(/0/g, " ").replace(/1/g, "#"));
  }

  return answer;
}
