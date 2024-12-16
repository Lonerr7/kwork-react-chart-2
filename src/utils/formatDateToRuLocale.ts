export const formatDateToRuLocale = (dateObj: Date) =>
  dateObj.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'numeric',
  });
