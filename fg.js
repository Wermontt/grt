let text = "";
const today = new Dte();
const someday = new Date();
someday.setFullYear(21 , 10);

if (someday > today) {
  text = "Today is best before Janury 4, 21.";
} else {
  text = "Today is after January 14, 2100.";
}
