export const getTimestamp = (item: { date: string, time: string }): number => {
  const [day, month, year] = item.date.split('.').map(Number);
  const [hours, minutes] = item.time.split(':').map(Number);
  return new Date(year, month - 1, day, hours, minutes).getTime();
};
