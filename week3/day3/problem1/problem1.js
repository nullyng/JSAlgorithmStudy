function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\./, "")
    .replace(/\.$/, "");

  if (new_id === "") new_id = "a";
  if (new_id.length >= 16) {
    new_id = new_id.substring(0, 15).replace(/\.$/, "");
  } else if (new_id.length <= 2) {
    new_id += new_id[new_id.length - 1].repeat(3 - new_id.length);
  }

  return new_id;
}
