function solution(today, terms, privacies) {
  let answer = [];
  let termList = {};

  terms.map((term) => {
    let [name, range] = term.split(" ");
    termList[name] = Number(range);
  });

  privacies.map((privacy, idx) => {
    let [ymd, term] = privacy.split(" ");
    let [year, month, date] = ymd.split(".");
    let [todayYear, todayMonth, todayDate] = today.split(".");

    year = Number(year);
    month = Number(month);
    date = Number(date);

    let termDate = date - 1;
    let termMonth = month + (termList[term] % 12);
    let termYear = year + Math.floor(termList[term] / 12);

    if (termDate <= 0) {
      termDate = 28;
      termMonth--;
    }

    if (termMonth > 12) {
      termMonth %= 12;
      termYear++;
    }

    let removed = false;
    if (termYear < todayYear) removed = true;
    else if (termYear == todayYear) {
      if (termMonth < todayMonth) removed = true;
      else if (termMonth == todayMonth) {
        if (termDate < todayDate) removed = true;
      }
    }

    if (removed) answer.push(idx + 1);
  });

  return answer;
}
