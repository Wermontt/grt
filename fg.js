let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2011 , 1);

if (someday > today) {
  text = "Today is best before January 4, 210.";
} else {
  text = "Today is after January 14, 2100.";
}
