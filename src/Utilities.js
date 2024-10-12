import CalendarMonth from "./CalendarMonth.js";
export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const CalendarYear = (year) => {
  return MONTHS.map((month, index) => ({
    name: month,
    days: CalendarMonth(year, index),
    id: index,
    year: year,
  }));
};
