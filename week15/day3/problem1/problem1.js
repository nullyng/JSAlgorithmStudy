function solution(cards) {
  let boxes = [];

  for (let i = 0; i < cards.length; i++) {
    let box = [];
    let currIdx = i,
      prevIdx;

    while (cards[currIdx] > 0) {
      box.push(cards[currIdx]);
      prevIdx = currIdx;
      currIdx = cards[currIdx] - 1;
      cards[prevIdx] = -1;
    }

    if (box.length > 0) boxes.push(box);
  }

  if (boxes.length === 1) return 0;

  boxes = boxes.sort((a, b) => b.length - a.length);
  return boxes[0].length * boxes[1].length;
}
