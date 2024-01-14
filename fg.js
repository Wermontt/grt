let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(21 , 127);

if (someday > today) {
  text = "Today is best before January 14, 210.";
} else {
  text = "Today is after January 14, 2100.";
}
