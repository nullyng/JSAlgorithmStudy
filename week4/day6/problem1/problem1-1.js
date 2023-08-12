function solution(fees, records) {
  let parkingObj = {};
  let totalTimeObj = {};
  let totalFeesObj = {};

  records.forEach((record) => {
    let [time, number, inout] = record.split(" ");

    if (inout === "IN") {
      parkingObj[number] = time;
    } else {
      let [inHour, inMinute] = parkingObj[number].split(":").map(Number);
      let [outHour, outMinute] = time.split(":").map(Number);
      let totalParkingTime = (outHour - inHour) * 60 + outMinute - inMinute;

      if (totalTimeObj[number] === undefined) {
        totalTimeObj[number] = totalParkingTime;
      } else {
        totalTimeObj[number] += totalParkingTime;
      }

      delete parkingObj[number];
    }
  });

  let restOfCars = Object.keys(parkingObj);

  restOfCars.forEach((number) => {
    let [hour, minute] = parkingObj[number].split(":").map(Number);
    let totalParkingTime = (23 - hour) * 60 + 59 - minute;

    if (totalTimeObj[number] === undefined) {
      totalTimeObj[number] = totalParkingTime;
    } else {
      totalTimeObj[number] += totalParkingTime;
    }
  });

  Object.keys(totalTimeObj).forEach((number) => {
    let totalFees =
      totalTimeObj[number] <= fees[0]
        ? fees[1]
        : fees[1] +
          Math.ceil((totalTimeObj[number] - fees[0]) / fees[2]) * fees[3];
    totalFeesObj[number] = totalFees;
  });

  const numberArr = Object.keys(totalFeesObj).sort((a, b) => a - b);
  const answer = numberArr.map((number) => totalFeesObj[number]);

  return Object.values(answer);
}
