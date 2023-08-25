function solution(msg) {
  let dictionary = {};
  let answer = [];
  let idx;

  // 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
  for (idx = 1; idx <= 26; idx++) {
    dictionary[String.fromCharCode(65 + idx - 1)] = idx;
  }

  while (msg.length > 0) {
    // 사전에서 현재 입력과 일치하는 가장 긴 문자열을 찾는다.
    for (let i = msg.length; i >= 0; i--) {
      let w = msg.slice(0, i); // 현재 입력
      let wc = msg.slice(0, i + 1); // 현재 입력+다음 글자

      if (dictionary[w]) {
        // 현재 입력에 해당하는 색인 번호를 push한다.
        answer.push(dictionary[w]);
        // 사전에서 찾은 부분을 자른다.
        msg = msg.slice(i, msg.length);
        // 현재 입력+다음 글자를 사전에 등록한다.
        dictionary[wc] = idx++;
        break;
      }
    }
  }

  return answer;
}
