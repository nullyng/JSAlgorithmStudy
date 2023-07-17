function solution(wallpaper) {
  let lux, luy, rdx, rdy;

  lux = luy = 51;
  rdx = rdy = 0;

  wallpaper.forEach((files, idx) => {
    for (let i = 0; i < files.length; i++) {
      if (files[i] === "#") {
        lux = Math.min(lux, idx);
        luy = Math.min(luy, i);
        rdx = Math.max(rdx, idx);
        rdy = Math.max(rdy, i);
      }
    }
  });

  return [lux, luy, rdx + 1, rdy + 1];
}
