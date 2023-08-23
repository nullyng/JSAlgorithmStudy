function solution(files) {
  files.sort((a, b) => {
    let indexA = a.search(/[0-9]/);
    let headA = a.slice(0, indexA).toLowerCase();
    let numberA = Number(a.match(/\d+/));

    let indexB = b.search(/[0-9]/);
    let headB = b.slice(0, indexB).toLowerCase();
    let numberB = Number(b.match(/\d+/));

    if (headA < headB) return -1;
    else if (headA > headB) return 1;
    if (headA === headB) {
      return numberA - numberB;
    }
  });

  return files;
}
