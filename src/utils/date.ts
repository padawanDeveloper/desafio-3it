export function getLastMonths(months: number) {
  const today = new Date();
  const lastMonths = [];

  for (let i = 0; i < months; i++) {
    const date = new Date(today);
    date.setMonth(today.getMonth() - i);

    const formattedDate = `${date.getFullYear()}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}`;

    lastMonths.push(formattedDate);
  }

  return lastMonths;
}
