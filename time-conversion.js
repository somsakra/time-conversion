//07:05:45PM = 19:05:45

export const timeConversion = (time12 = '') => {
  let h1 = Number(time12[0]);
  let h2 = Number(time12[1]);
  let hh = h1 * 10 + (h2 % 10);

  if (hh > 0 && hh <= 12) {
    if (time12.charAt(8) === 'P') {
      if (hh === 12) {
        return '12:00:00';
      }
      hh = hh + 12;
      return hh + time12.substring(2, 8);
    } else if (time12.charAt(8) === 'A') {
      if (hh === 12) {
        return '00:00:00';
      }
      return hh + time12.substring(2, 8);
    }
    return 'invalid input';
  }
  return 'invalid input';
};
