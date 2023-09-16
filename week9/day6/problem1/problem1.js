function solution(skill, skill_trees) {
  let answer = 0;

  skill_trees.forEach((skill_tree) => {
    skill_tree = skill_tree
      .split("")
      .filter((alpha) => skill.includes(alpha))
      .join("");
    if (skill.indexOf(skill_tree) === 0) answer++;
  });

  return answer;
}
