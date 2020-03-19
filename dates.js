


// Find the difference in days between two dates.
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2

// Get the time from a Date object as a string.
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"

// Get the day of the year from a Date object.
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272

// Find the difference in hours between two dates
const getHoursDiffBetweenDates = (date1, date2) => Math.abs(date1 - date2) / 36e5;
getHoursDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15'));
