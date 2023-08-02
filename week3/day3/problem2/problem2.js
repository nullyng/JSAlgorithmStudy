function solution(numbers, hand) {
  let answer = "";
  let keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  };

  let currLeftRow = 3,
    currleftColumn = 0;
  let currRightRow = 3,
    currRightColumn = 2;

  const getDistance = (currRow, currColumn, nextRow, nextColumn) => {
    return Math.abs(currRow - nextRow) + Math.abs(currColumn - nextColumn);
  };
  const setLeft = (number) => {
    answer = answer.concat("L");
    [currLeftRow, currleftColumn] = keypad[number];
  };
  const setRight = (number) => {
    answer = answer.concat("R");
    [currRightRow, currRightColumn] = keypad[number];
  };

  numbers.forEach((number) => {
    switch (number) {
      case 1:
      case 4:
      case 7:
        setLeft(number);
        break;
      case 3:
      case 6:
      case 9:
        setRight(number);
        break;
      case 2:
      case 5:
      case 8:
      case 0:
        const [nextRow, nextColumn] = keypad[number];
        const distOfLeftHand = getDistance(
          currLeftRow,
          currleftColumn,
          nextRow,
          nextColumn
        );
        const distOfRightHand = getDistance(
          currRightRow,
          currRightColumn,
          nextRow,
          nextColumn
        );

        if (distOfLeftHand === distOfRightHand) {
          if (hand === "right") {
            setRight(number);
          } else {
            setLeft(number);
          }
        } else if (distOfLeftHand < distOfRightHand) {
          setLeft(number);
        } else {
          setRight(number);
        }
    }
  });

  return answer;
}
