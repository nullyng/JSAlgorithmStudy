function solution(priorities, location) {
  let answer = 1;
  let sortedPriorities = [...priorities].sort((a, b) => b - a);
  priorities = priorities.map((priority, idx) => [priority, idx]);

  while (1) {
    let [p1, i1] = priorities[0];
    if (p1 >= sortedPriorities[0]) {
      if (i1 === location) return answer;
      sortedPriorities.shift();
      priorities.shift();
      answer++;
    } else {
      priorities.push([p1, i1]);
      priorities.shift();
    }
  }
}
