// let mystr="developer";
// let newstr = mystr.charAt(0).toUpperCase()+mystr.substring(1);
// const myNewString = myString[0].toUpperCase() + myString.substring(1);
// const myNewString1 = `${myString[0].toUpperCase()}${myString.slice(1)}`;

let x;
const num = new Number(523454);

// toString() - returns a string representation of the number

x=num.toString();
// To get the length

x = num.toString().length;
// toFixed() - returns a string representation of the number with a specified number of decimals
x = num.toFixed(2);
// toPrecision() - returns a number with the specified length
x = num.toPrecision(5);
// toExponential() -  convert a number to exponential notation and return its value as a string
x = num.toExponential(3);
// toLocaleString() - returns a string representation of the number, using the current locale
x = num.toLocaleString('en-IN');

// valueOf - Get value
x = num.valueOf();
x = Number.MAX_VALUE;
x= Number.MIN_VALUE;

console.log(x," ",typeof x);
