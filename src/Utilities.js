import CalendarMonth from "./CalendarMonth.js";
export const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
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

export const CalendarYear = (year = 2000) =>
  MONTHS.map((month, index) => ({
    name: month,
    days: CalendarMonth(year, index),
    id: index,
    year: year,
  }));
