function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let passing = [];
  let currWeight = 0;

  // 대기 트럭이 없을 때까지 반복한다.
  while (truck_weights.length > 0) {
    answer++;

    // 다리가 꽉 차있다면 가장 앞 트럭이 다리를 완전히 벗어난다.
    if (passing.length === bridge_length) currWeight -= passing.shift();
    if (currWeight + truck_weights[0] <= weight) {
      // 현재 다리 위의 트럭들과 다음 순서의 대기 트럭의 무게 합이
      // 다리가 견딜 수 있는 무게보다 가볍다면 다리 위에 그 트럭을 올린다.
      currWeight += truck_weights[0];
      passing.push(truck_weights[0]);
      truck_weights.shift();
    } else {
      // 그렇지 않다면 다음 대기 트럭은 다리 위에 올라갈 수 없으므로 0을 push한다.
      passing.push(0);
    }
  }

  return answer + bridge_length;
}
