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
  // Generate a month (including a few days from adjacent months depending on when the previous monday was and the next sunday is) -
  // Also add appointments that were previously saved to localStorage

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
    // If January -> the previous months dates are from the previous year
    const verifiedMonth = month < 1 ? 11 : month - 1;
    const verifiedYear = month < 1 ? year - 1 : year;

    // Get correct appointments from localStorage
    const data = JSON.parse(
      localStorage.getItem(
        `${prevMonthLastDate - i + 1}/${verifiedMonth}/${verifiedYear}`
      )
    );
    const localMemory = data !== null ? data : [];

    dates = [
      ...dates,
      {
        num: prevMonthLastDate - i + 1,
        appointments: localMemory,
        day: DAYS[new Date(year, month - 1, prevMonthLastDate - i).getDay()],
        month: verifiedMonth,
        year: verifiedYear,
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
    // If December -> the previous months dates are from the next year.
    const verifiedMonth = month > 10 ? 0 : month + 1;
    const verifiedYear = month > 10 ? year + 1 : year;

    // Get correct appointments from localStorage
    const data = JSON.parse(
      localStorage.getItem(`${i}/${verifiedMonth}/${verifiedYear}`)
    );
    const localMemory = data !== null ? data : [];
    dates = [
      ...dates,
      {
        num: i,
        appointments: localMemory,
        day: DAYS[new Date(year, month + 1, i - 1).getDay()],
        month: verifiedMonth,
        year: verifiedYear,
        currentMonth: false,
      },
    ];
  }
  return dates;
};

export const verifyMonthAndYear = (month, year = 2000) => {
  // Keep months within 0-11
  let verifiedMonth = month;
  let verifiedYear = year;

  // 12th month is 1st of next year
  if (month > 11) {
    verifiedMonth = 0;
    verifiedYear = year + 1;
  }
  // -1st month is the 12th of the previous year
  if (month < 0) {
    verifiedMonth = 11;
    verifiedYear = year - 1;
  }

  return [verifiedMonth, verifiedYear];
};

export const CalendarYear = (year) =>
  MONTHS.map((month, index) => ({
    name: month,
    days: CalendarMonth(year, index),
    id: index,
    year: year,
  }));

export default CalendarMonth;
