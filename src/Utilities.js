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
  const date = new Date();
  let dates = [];

  const newYear = date.getFullYear(year);
  const newMonth = date.getMonth(month);
  // Get the first day of the month
  let firstDay = new Date(newYear, newMonth, 1).getDay();
  // Get the last date of the month
  let lastDate = new Date(newYear, newMonth + 1, 0).getDate();
  // Get the day of the last date of the month
  let dayEnd = new Date(newYear, newMonth, lastDate).getDay();
  // Get the last date of the previous month
  let prevMonthLastDate = new Date(newYear, newMonth, 0).getDate();
  console.log(dayEnd);

  // Add the dates from the previous month
  for (let i = firstDay; i > 0; i--) {
    dates = [
      ...dates,
      {
        num: prevMonthLastDate - i + 1,
        text: "",
        highlighted: false,
        day: DAYS[new Date(year, month, prevMonthLastDate - i + 1).getDay()],
        month: parseInt(month) - 1,
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
        day: DAYS[new Date(year, month, i).getDay()],
        month: parseInt(month),
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
        day: DAYS[new Date(year, month, i - dayEnd + 1).getDay()],
        month: parseInt(month) + 1,
        currentMonth: false,
      },
    ];
  }
  return dates;
};

export const MONTHS = [
  { name: "January", days: arrayOfDays("2024", "0"), id: 0 },
  { name: "February", days: arrayOfDays("2024", "1"), id: 1 }, // add leap year  https://www.timeanddate.com/calendar/months/
  { name: "March", days: arrayOfDays("2024", "2"), id: 2 },
  { name: "April", days: arrayOfDays("2024", "3"), id: 3 },
  { name: "May", days: arrayOfDays("2024", "4"), id: 4 },
  { name: "June", days: arrayOfDays("2024", "5"), id: 5 },
  { name: "July", days: arrayOfDays("2024", "6"), id: 6 },
  { name: "August", days: arrayOfDays("2024", "7"), id: 7 },
  { name: "September", days: arrayOfDays("2024", "8"), id: 8 },
  { name: "October", days: arrayOfDays("2024", "9"), id: 9 },
  { name: "November", days: arrayOfDays("2024", "10"), id: 10 },
  { name: "December", days: arrayOfDays("2024", "11"), id: 11 },
];
