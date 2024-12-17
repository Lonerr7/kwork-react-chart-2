export const cutStringDate = (dateStr: string) => {
  const strSliced = dateStr.split('.');
  return `${strSliced[0]}.${strSliced[1]}`;
};
