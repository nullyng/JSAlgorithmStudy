function solution(arr1, arr2) {
  let rowLength = arr1.length;
  let colLength = arr2[0].length;
  let answer = [];

  for (let i = 0; i < rowLength; i++) {
    let temp = [];
    for (let j = 0; j < colLength; j++) {
      let sum = 0;
      for (let k = 0; k < arr1[0].length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      temp.push(sum);
    }
    answer.push(temp);
  }

  return answer;
}
