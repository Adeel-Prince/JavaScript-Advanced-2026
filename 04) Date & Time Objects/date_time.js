// for current time and date;
const currentDate = new Date();
console.log(currentDate);

// new Date() with (dateString);
const dateString = "2026-10-21T11:30:07.715Z";
const dateFromString = new Date(dateString);
console.log(dateFromString);

// Date with (year and month);
const date1 = new Date(2022, 12);
console.log(date1);

// Date with (year and month and day);
const date2 = new Date(2023, 1, 2);
console.log(date2);

// Date with (year and month and day, time);
const date3 = new Date(2023, 1, 2, 11);
console.log(date3);

// Date with (year and month and day, time, mint);
const date4 = new Date(2023, 1, 2, 11, 15);
console.log(date4);

// Date with (year and month and day, time, mints, seconds);
const date5 = new Date(2023, 1, 2, 11, 15, 22);
console.log(date5);

// Date with (year and month and day, time, mints, seconds, miliseconds);
const date6 = new Date(2023, 1, 2, 11, 15, 22, 120);
console.log(date6);

// Date with (milliseconds);
const curMilliSeconds = new Date().getTime();
const dateFromMilliSconds = new Date(curMilliSeconds);
console.log(dateFromMilliSconds);

// we can also get and set methods use for get and set date and time;
// like as getfulldate, year and gethours; getmints and seconds also;

// also we use some useful methods like tolocalString();

const date = new Date();
const localString = date.toLocaleString();
console.log(localString);

// get the only date;
const date7 = new Date();
const localdateString = date7.toLocaleDateString();
console.log(localdateString);

// get the only time also;
const date8 = new Date();
const localTimeString = date8.toLocaleTimeString();
console.log(localTimeString);
