export const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const arrayOfDays = (year, month) => {
  // 2024 in the first day of the month provided.
  const date = new Date(year, month);

  let dates = [];
  const monthInt = parseInt(month);
  const yearInt = parseInt(year);

  // Get the first day of the month
  // let firstDay = new Date(yearInt, monthInt, 0).getDay();
  // // get the last day of the month
  // let lastDay = new Date(yearInt, monthInt, 0).getDay();
  // get first date of this month
  // let firstDate = new Date(yearInt, monthInt, 1).getDate();

  // Get the last date of the month
  let lastDate = new Date(yearInt, monthInt + 1, 0).getDate();

  const daysSinceMonday = Math.abs(
    date.getDate() - ((date.getDay() + 6) % 7) - 1
  );

  // Get the day of the last date of the month
  let dayEnd = new Date(yearInt, monthInt + 1, lastDate).getDay();
  // Get the last date of the previous month
  let prevMonthLastDate = new Date(yearInt, monthInt + 1, 0).getDate();

  // Add the dates from the previous month
  for (let i = daysSinceMonday; i > 0; i--) {
    dates = [
      ...dates,
      {
        num: prevMonthLastDate - i + 1,
        text: "",
        highlighted: false,
        day: DAYS[
          new Date(yearInt, monthInt, prevMonthLastDate - i + 1).getDay()
        ],
        month: monthInt,
        currentMonth: false,
      },
    ];
  }
  // add the dates of the current month
  for (let i = 1; i <= lastDate; i++) {
    dates = [
      ...dates,
      {
        num: i,
        text: "",
        highlighted: false,
        day: DAYS[new Date(yearInt, monthInt + 1, i).getDay()],
        month: monthInt + 1,
        currentMonth: true,
      },
    ];
  }

  // Add the first dates of the next month
  for (let i = dayEnd; i < 6; i++) {
    dates = [
      ...dates,
      {
        num: i - dayEnd + 1,
        text: "",
        highlighted: false,
        day: DAYS[new Date(yearInt, monthInt + 2, i - dayEnd + 4).getDay()],
        month: monthInt + 2,
        currentMonth: false,
      },
    ];
  }
  return dates;
};

export const MONTHS = [
  { name: "January", days: arrayOfDays("2024", "0"), id: 1, year: 2024 },
  { name: "February", days: arrayOfDays("2024", "1"), id: 2, year: 2024 }, // add leap year  https://www.timeanddate.com/calendar/months/
  { name: "March", days: arrayOfDays("2024", "2"), id: 3, year: 2024 },
  { name: "April", days: arrayOfDays("2024", "3"), id: 4, year: 2024 },
  { name: "May", days: arrayOfDays("2024", "4"), id: 5, year: 2024 },
  { name: "June", days: arrayOfDays("2024", "5"), id: 6, year: 2024 },
  { name: "July", days: arrayOfDays("2024", "6"), id: 7, year: 2024 },
  { name: "August", days: arrayOfDays("2024", "7"), id: 8, year: 2024 },
  { name: "September", days: arrayOfDays("2024", "8"), id: 9, year: 2024 },
  { name: "October", days: arrayOfDays("2024", "9"), id: 10, year: 2024 },
  { name: "November", days: arrayOfDays("2024", "10"), id: 11, year: 2024 },
  { name: "December", days: arrayOfDays("2024", "11"), id: 12, year: 2024 },
];
