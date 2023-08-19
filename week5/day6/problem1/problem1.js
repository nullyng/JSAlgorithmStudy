function solution(s) {
  let answer = s.length;
  let slicedLength = 1; // 자를 문자열의 길이
  // 자를 수 있는 문자열의 최대 길이는 문자열 전체 길이의 절반이다.
  let maxSlicedLength = Math.floor(s.length / 2);

  // 자를 문자열의 길이를 1씩 증가시킨다.
  while (slicedLength <= maxSlicedLength) {
    let slicedStr = ""; // 현재 자른 문자열
    let prevStr = ""; // 이전에 자른 문자열
    let duplicatedCnt = 1; // 현재 자른 문자열이 반복된 횟수
    let totalStr = ""; // 압축한 문자열

    for (let i = 0; i < s.length; i += slicedLength) {
      slicedStr = s.slice(i, i + slicedLength);

      // 현재 자른 문자열과 이전에 자른 문자열을 비교한다.
      if (slicedStr === prevStr) duplicatedCnt++;
      else {
        // 압축한 문자열에 현재 문자열을 덧붙인다.
        // 반복된 적이 있는 경우에 한해서 반복된 횟수도 함께 덧붙인다.
        totalStr += (duplicatedCnt > 1 ? duplicatedCnt : "") + prevStr;
        // 반복된 횟수를 초기화한다.
        duplicatedCnt = 1;
      }

      prevStr = slicedStr;
    }

    // 마지막으로 자른 문자열에 대한 처리
    totalStr += (duplicatedCnt > 1 ? duplicatedCnt : "") + prevStr;

    answer = Math.min(answer, totalStr.length);
    slicedLength++;
  }

  return answer;
}
