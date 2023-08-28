function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];

  cities = cities.map((city) => city.toLowerCase());

  if (cacheSize == 0) return cities.length * 5;

  cities.forEach((city) => {
    let cacheIdx = cache.indexOf(city);

    if (cacheIdx > -1) {
      answer += 1;
      cache.splice(cacheIdx, 1);
    } else {
      answer += 5;
      if (cache.length === cacheSize) cache.shift();
    }
    cache.push(city);
  });

  return answer;
}
