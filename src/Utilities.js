export const MONTHS = [
  { name: "January", days: 31 },
  { name: "February", days: 28 }, // add leap year thing i guess ^^ https://www.timeanddate.com/calendar/months/
  { name: "March", days: 31 },
  { name: "April", days: 30 },
  { name: "May", days: 31 },
  { name: "June", days: 30 },
  { name: "July", days: 31 },
  { name: "Augusti", days: 31 },
  { name: "September", days: 30 },
  { name: "October", days: 31 },
  { name: "November", days: 30 },
  { name: "December", days: 31 },
];

export const arrayOfDays = (month) => {
  let accumulator = 0;
  return Array.from({ length: month.days }, () => {
    accumulator += 1;
    return { num: accumulator, text: "", highlighted: false };
  });
};
