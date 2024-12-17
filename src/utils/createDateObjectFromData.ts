export const createDateObjectFromData = (dateString: string) => {
  const d = dateString.split('.');

  return new Date(`${d[1]}.${d[0]}.${d[2]}`);
};
