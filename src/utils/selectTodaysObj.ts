export const selectTodaysObject = (obj: { x: Date; y: number }) =>
  obj.x.toDateString() === new Date(2024, 7, 21).toDateString();
