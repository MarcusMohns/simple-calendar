export const arrayOfDays = (len) => {
  let accumulator = 0;
  return Array.from({ length: len }, () => {
    accumulator += 1;
    return { num: accumulator, text: "", highlighted: false };
  });
};

export const MONTHS = [
  { name: "January", days: arrayOfDays(31), id: 0 },
  { name: "February", days: arrayOfDays(28), id: 1 }, // add leap year  https://www.timeanddate.com/calendar/months/
  { name: "March", days: arrayOfDays(31), id: 2 },
  { name: "April", days: arrayOfDays(30), id: 3 },
  { name: "May", days: arrayOfDays(31), id: 4 },
  { name: "June", days: arrayOfDays(30), id: 5 },
  { name: "July", days: arrayOfDays(31), id: 6 },
  { name: "August", days: arrayOfDays(31), id: 7 },
  { name: "September", days: arrayOfDays(30), id: 8 },
  { name: "October", days: arrayOfDays(31), id: 9 },
  { name: "November", days: arrayOfDays(30), id: 10 },
  { name: "December", days: arrayOfDays(31), id: 11 },
];

export const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
