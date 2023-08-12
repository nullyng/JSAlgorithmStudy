function solution(fees, records) {
  let parkingObj = {}; // 입차 정보를 저장하는 객체
  let totalTimeObj = {}; // 총 주차 시간을 저장하는 객체
  let totalFeesObj = {}; // 총 요금을 저장하는 객체

  // 총 주차 시간을 계산하여 totalTimeObj에 저장하는 함수
  const calcTotalParkingTime = (number, inHour, inMin, outHour, outMin) => {
    let totalParkingTime = (outHour - inHour) * 60 + outMin - inMin;

    if (totalTimeObj[number] === undefined) {
      totalTimeObj[number] = totalParkingTime;
    } else {
      totalTimeObj[number] += totalParkingTime;
    }

    delete parkingObj[number];
  };

  records.forEach((record) => {
    let [time, number, inout] = record.split(" ");

    if (inout === "IN") {
      parkingObj[number] = time;
    } else {
      // 총 주차 시간을 구한다.
      let [inHour, inMin] = parkingObj[number].split(":").map(Number);
      let [outHour, outMin] = time.split(":").map(Number);

      calcTotalParkingTime(number, inHour, inMin, outHour, outMin);
    }
  });

  // 아직 출차하지 않은 차들은 23:59에 출차된 것으로 간주하여 계산한다.
  for (const number in parkingObj) {
    let [hour, min] = parkingObj[number].split(":").map(Number);

    calcTotalParkingTime(number, hour, min, 23, 59);
  }

  // 총 주차 시간에 따라 요금을 계산하여 totalFeesObj에 저장한다.
  for (const number in totalTimeObj) {
    let totalFees =
      totalTimeObj[number] <= fees[0]
        ? fees[1]
        : fees[1] +
          Math.ceil((totalTimeObj[number] - fees[0]) / fees[2]) * fees[3];

    totalFeesObj[number] = totalFees;
  }

  const answer = Object.keys(totalFeesObj)
    .sort((a, b) => a - b)
    .map((number) => totalFeesObj[number]);

  return Object.values(answer);
}
