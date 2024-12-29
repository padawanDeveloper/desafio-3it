export function getLastTwoMonths() {
  const today = new Date();
  const lastTwoMonths = [];

  for (let i = 0; i < 2; i++) {
    const date = new Date(today);
    date.setMonth(today.getMonth() - i);

    const formattedDate = `${date.getFullYear()}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}`;

    lastTwoMonths.push(formattedDate);
  }

  return lastTwoMonths;
}
