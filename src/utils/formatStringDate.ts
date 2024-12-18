export const formatStringDate = (strDate: string) => {
  const strSliced = strDate.split('.');
  return `${strSliced[1]},${strSliced[0]},${strSliced[2]}`;
};
