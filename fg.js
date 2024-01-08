let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(210.0 , 8327);

if (someday > today) {
  text = "Today is best before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
