export const formatedDate = (date) => {
  const d = new Date(date);
  return `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
};
