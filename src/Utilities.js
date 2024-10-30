export const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const WEEK = [
  // New Date() treats Sunday as first day of the week
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

export const CalendarMonth = (year, month) => {
  const date = new Date(year, month);

  let dates = [];

  // Get the last date of the month
  let lastDate = new Date(year, month + 1, 0).getDate();

  // Get first day of the next month
  let nextMonthFirstDay = new Date(year, month + 1, 1).getDay();
  // Get the last date of the previous month
  let prevMonthLastDate = new Date(year, month, 0).getDate();

  const daysUntilSunday = 1 + ((0 + (7 - nextMonthFirstDay)) % 7);
  const daysSinceMonday = Math.abs(
    date.getDate() - ((date.getDay() + 6) % 7) - 1
  );

  // Add the last dates from the previous month
  for (let i = daysSinceMonday; i > 0; i--) {
    // Get correct appointments from localStorage
    const data = JSON.parse(
      localStorage.getItem(`${prevMonthLastDate - i + 1}/${month - 1}/${year}`)
    );
    const localMemory = data !== null ? data : [];

    dates = [
      ...dates,
      {
        num: prevMonthLastDate - i + 1,
        appointments: localMemory,
        day: DAYS[new Date(year, month - 1, prevMonthLastDate - i).getDay()],
        month: month - 1,
        year: year,
        currentMonth: false,
      },
    ];
  }
  // add the dates of the current month
  for (let i = 1; i <= lastDate; i++) {
    // Get correct appointments from localStorage
    const data = JSON.parse(localStorage.getItem(`${i}/${month}/${year}`));
    const localMemory = data !== null ? data : [];

    dates = [
      ...dates,
      {
        num: i,
        appointments: localMemory,
        day: DAYS[new Date(year, month, i - 1).getDay()],
        month: month,
        year: year,
        currentMonth: true,
      },
    ];
  }

  // Add the first dates of the next month
  for (let i = 1; i <= daysUntilSunday; i++) {
    // Get correct appointments from localStorage
    const data = JSON.parse(localStorage.getItem(`${i}/${month + 1}/${year}`));
    const localMemory = data !== null ? data : [];
    dates = [
      ...dates,
      {
        num: i,
        appointments: localMemory,
        day: DAYS[new Date(year, month + 1, i - 1).getDay()],
        month: month + 1,
        year: year,
        currentMonth: false,
      },
    ];
  }
  return dates;
};

export const CalendarYear = (year) =>
  MONTHS.map((month, index) => ({
    name: month,
    days: CalendarMonth(year, index),
    id: index,
    year: year,
  }));

export default CalendarMonth;
