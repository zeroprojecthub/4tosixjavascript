let x;

// Square root
x = Math.sqrt(9);
// x = Math.abs(-5);
x = Math.min(51,2,3,4);
x = Math.max(51,2,3,4);
x = Math.ceil(3.7);
x = Math.floor(51.89);
x = Math.random();
x = Math.floor(Math.random()*100+1);

let y = Math.floor(Math.random()*50+1);

x  = Math.pow(2,5);
// let ans=x+y;
// let outsum = `${x} + ${y} == ${ans}`


// console.log(outsum);

// console.log(x,typeof x);

let d;

// Get today's date and time
d = new Date();
// let year=d.getFullYear();
// console.log(year,typeof year);
// d = d.toString();
// d = new Date(2024, 0, 10, 12, 30, 0);
// // Pass in a string
// d = new Date('2021-07-10T12:30:00');
// d = new Date('07/10/2021 12:30:00');
// d = new Date('2022-07-10');
// d = new Date('07-10-2022');
// d=d.toString();
// Get current timestamp
// d = Date.now();
// d=d/1000;
// d = Math.floor(Date.now() / 1000);
x = d.toString();
x = d.getTime();
x = d.valueOf();
x = d.getMonth();
x = d.getMonth() + 1;
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();
x = `${d.getDate()} - ${d.getMonth()+1} - ${d.getFullYear()}`
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-IN').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
x = d.toLocaleString('default', { month: 'long' });
x = d.toLocaleDateString('default')
x = d.toLocaleTimeString('default')
x = d.toLocaleString('default');

x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Asia/kolkata',
  });




 console.log(x,typeof x);
