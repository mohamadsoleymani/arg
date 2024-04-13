export function getDaysBefore(date, days = 5) {
  date.setDate(date.getDate() - days);
  return date;
}

export function getDate(delta = 3) {
  const today = new Date();
  return getDaysBefore(today, delta);
}
