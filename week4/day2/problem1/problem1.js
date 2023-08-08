function solution(users, emoticons) {
  let answer = [0, 0];
  let percentage = [40, 30, 20, 10];
  let discount = new Array(emoticons.length);

  const doAllCase = (cnt) => {
    // 모든 이모티콘에 대한 할인율이 정해지면 플러스 가입자 수와 구매 비용을 구한다.
    if (cnt === emoticons.length) {
      // 할인이 적용된 구매 비용 배열을 새로 만든다.
      let discountedEmoticons = emoticons.map(
        (emoticon, idx) => emoticon * (100 - discount[idx]) * 0.01
      );
      let subscriber = 0;
      let totalSalesAmount = 0;

      // 모든 유저에 대해 이모티콘 구매 여부를 검사한다.
      users.forEach((user) => {
        let salesAmount = 0;
        emoticons.forEach((emoticon, idx) => {
          // 유저가 생각한 비율 이상으로 할인한다면 구매한다.
          if (discount[idx] >= user[0]) {
            salesAmount += discountedEmoticons[idx];
          }
        });
        // 구매 비용이 유저가 생각한 비용 이상이라면 서비스에 가입한다.
        // 그렇지 않으면 구매 비용을 전체 구매 비용에 더한다.
        if (salesAmount >= user[1]) subscriber++;
        else totalSalesAmount += salesAmount;
      });

      // 정답과 비교하여 정답을 갱신한다.
      if (answer[0] == subscriber) {
        answer[1] = Math.max(answer[1], totalSalesAmount);
      } else if (answer[0] < subscriber) {
        answer[0] = subscriber;
        answer[1] = totalSalesAmount;
      }

      return;
    }

    // 모든 할인율을 적용해본다.
    for (let i = 0; i < 4; i++) {
      discount[cnt] = percentage[i];
      doAllCase(cnt + 1);
    }
  };

  doAllCase(0);

  return answer;
}
