const now = new Date();
//console.log(now);

//console.log(`year:${now.getFullYear()}`);
//console.log(`month:${now.getMonth()}`);
//console.log(`day:${now.getDate()}`);
//console.log(`hour:${now.getHours()}`);
//console.log(`minutes:${now.getMinutes()}`);
//console.log(`seconds:${now.getSeconds()}`);

const timestamp = now.getTime();
//console.log(timestamp);
const myDate = new Date(timestamp);
console.log(`year: ${myDate.getFullYear()}`);
