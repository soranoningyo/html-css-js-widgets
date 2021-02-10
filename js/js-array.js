/*global console*/
var worldTimeLines = [
	"timeLine 1",
	"timeLine 2",
	"timeLine 3",
	"timeLine 4"
];
worldTimeLines[4] = "timeLine 5";
console.log(worldTimeLines);
worldTimeLines[0] = "timeLine '1'"; //لو اخترت اندكس خاص بعنصر معين حاياخذ مكانه
console.log(worldTimeLines);
worldTimeLines[worldTimeLines.length] = "timeLine 6";
console.log(worldTimeLines);
worldTimeLines.push = "timeLine 7";
console.log(worldTimeLines); //always at last
worldTimeLines.unshift = "timeLine 0";
console.log(worldTimeLines); //always at wtf???????
worldTimeLines.splice(1/*starting[elements are put before it]*/,/*how much to remove"it remove the index of the begining"*/0,/*new elements:spreated by coma",":*/"timeLine 1.5");
console.log(worldTimeLines);
worldTimeLines.pop();
console.log(worldTimeLines);
worldTimeLines.shift();
console.log(worldTimeLines);
//sakura is more useful then push & pop & shift & unshift -_- -_- -_-