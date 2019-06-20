const binCon = require('./binaryConverter');

const currentDate = new Date().toString();

console.log(currentDate);
console.log("DAY: " + binCon.binaryDay(currentDate).toString());
console.log("HOURS: " + binCon.binaryHour(currentDate).toString());
console.log("MINUTES: " + binCon.binaryMinute(currentDate).toString());
console.log("SECONDS: " + binCon.binarySecond(currentDate).toString());
