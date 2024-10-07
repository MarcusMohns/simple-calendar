import { MONTHS } from "./Utilities";
import { DAYS } from "./Utilities";

export const CalendarMonth = (year, month) => {
  const date = new Date(year, month);

  let dates = [];
  const monthInt = parseInt(month);
  const yearInt = parseInt(year);

  // Get the last date of the month
  let lastDate = new Date(yearInt, monthInt + 1, 0).getDate();

  // Get first day of the next month
  let nextMonthFirstDay = new Date(yearInt, monthInt + 1, 1).getDay();
  // Get the last date of the previous month
  let prevMonthLastDate = new Date(yearInt, monthInt, 0).getDate();

  const daysUntilSunday = 1 + ((0 + (7 - nextMonthFirstDay)) % 7);
  const daysSinceMonday = Math.abs(
    date.getDate() - ((date.getDay() + 6) % 7) - 1
  );

  // Add the last dates from the previous month
  for (let i = daysSinceMonday; i > 0; i--) {
    // Get correct appointments from localStorage
    const data = JSON.parse(
      localStorage.getItem(
        `${prevMonthLastDate - i + 1}/${monthInt - 1}/${yearInt}`
      )
    );
    const localMemory = data !== null ? data : [];

    dates = [
      ...dates,
      {
        num: prevMonthLastDate - i + 1,
        appointments: localMemory,
        day: DAYS[
          new Date(yearInt, monthInt - 1, prevMonthLastDate - i).getDay()
        ],
        month: monthInt - 1,
        year: yearInt,
        currentMonth: false,
        highlighted: false,
      },
    ];
  }
  // add the dates of the current month
  for (let i = 1; i <= lastDate; i++) {
    // Get correct appointments from localStorage
    const data = JSON.parse(
      localStorage.getItem(`${i}/${monthInt}/${yearInt}`)
    );
    const localMemory = data !== null ? data : [];

    dates = [
      ...dates,
      {
        num: i,
        appointments: localMemory,
        day: DAYS[new Date(yearInt, monthInt, i - 1).getDay()],
        month: monthInt,
        year: yearInt,
        currentMonth: true,
        highlighted: false,
      },
    ];
  }

  // Add the first dates of the next month
  for (let i = 1; i <= daysUntilSunday; i++) {
    // Get correct appointments from localStorage
    const data = JSON.parse(
      localStorage.getItem(`${i}/${monthInt + 1}/${yearInt}`)
    );
    const localMemory = data !== null ? data : [];
    dates = [
      ...dates,
      {
        num: i,
        appointments: localMemory,
        day: DAYS[new Date(yearInt, monthInt + 1, i - 1).getDay()],
        month: monthInt + 1,
        year: yearInt,
        currentMonth: false,
        highlighted: false,
      },
    ];
  }
  return dates;
};

export default CalendarMonth;
