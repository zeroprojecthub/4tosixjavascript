
// const numc=44;
// // num1=23;
// numv=11;
// {
//     var numv=33;
//     let num1=55;
//     console.log('number1::',num1);

// }
// console.log('numberc::',numc);
// console.log('numberv::',numv);



// if(1)
// {
//     console.log("mornning")
// }else{
//     console.log("evening");
// }


// const arr=[22,33,44,5];
// arr.push(344);
// console.log(arr);


// const person={
//     name:"pankaj",
//     age:34
// }

// person.name = 'John';
// person.email = 'brad@gmail.com';
// console.log(person);


// let n=2323;
// n="rahul";
// n=true;
// n=null;
// n=undefined;
// n=9007199254740991n;
// // let nn;
// n=[22,33,44,55];
// n={
//     name:"rahul"
// }

// function sayHello() {
//     console.log('Hello');
//   }

// n=sayHello;

// console.log(typeof n,n);

// const name = 'John';

// let newName = name;
// newName = 'Jonathan';

// console.log('name:::',name);
// console.log('newname:::',newName);
// const person = {
//     name: 'Brad',
//     age: 40,
//   };

// //   let newPerson = person;
// //   newPerson.name = 'Bradley';
// // console.log(person);

// // console.log(newPerson);

// let amount = '33';
// let amount1 = '34';

// amount = parseInt(amount);
// amount1 = parseInt(amount1);

// // amount = +amount;
// // amount = Number(amount);
// // console.log(amount+amount1);

// let num=1;
// // num = num.toString();
// // num = String(num);

// num=Boolean(num);
// console.log(typeof num,num);
// // Convert string to decimal
// amount = parseFloat(amount);

// // Convert number to boolean
// amount = Boolean(amount);

// // Ways to get NaN
// console.log(Math.sqrt(-1));
// console.log(1 + NaN);
// console.log(undefined + undefined);
// console.log('foo' / 3);
// let age=45;
// console.log(amount, typeof amount);


let x;
// 1. Arithmatic Operators
x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;
let num1=33;
x = 'Hello' + ' ' + 'World';
x = 'creative'+'multimdeia';
x=`creative branch no: ${num1} is at surat`;
x = "pankaj"+" "+"desai";
x = 3 ** 4;
// Increment
x = 1;
// x = x + 1;
x++;

// 2. Assignment Operators

x = 10;

// x += 5;  // x=x+5
// x -= 5;
// x *= 5;
// x /= 5;
// x %= 5;
x **= 5;  //x=x**5
// 3. Comparison Operators

// Equal to (Just the value, not the type)
x = 2 == '2';
// Equal to (Type and value)
x = 2 === '2';
// Not equal to (Just the value, not the type)
x = 2 != '2';
// Not equal to (Type and value)
x = 2 !== 2;
// Greater than and less than
x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

x = 5 + '5';
x = 5 + Number('5');
// Coerced(Forcefully) to a number
x = 5 * '5';
// null is coerced to 0 as it is a `falsy` value
x = 5 + null;

x = Number(null);
x=null;

x = Number(true);
x=true;
// true is coerced to a 1
x = 5 + true;
// false is coerced to 0 (falsy)
x = 5 + false;
// Undefined is coerced to 0 (falsy)
x = 5 + undefined;

const name = 'John';
const age = 31;

// Concatenation
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;

const s = new String(' Hello World ');
x = s.length;
// Access value by key
x = s[0];
// Shows the prototype of the string object. Shows the properties and methods
x = s.__proto__;
// Change case
x = s.toUpperCase();

// charAt() - returns the character at the specified index
x = s.charAt(0);
x = s.charAt(3);

// indexOf - returns the index of the first occurrence of a specified value in a string
x = s.indexOf('d');
// substring() - search a string for a specified value
x = s.substring(2, 4);
// x=s.substring(-1);
// slice() - extracts a part of a string and returns a new string
// x = s.slice(-8, -4);
x = s.trim();

console.log(s);
// console.log(typeof x,x);
// replace() - replace all instances of a string
x = s.replace('World', 'John');
// includes() - returns true if the string is found
x = s.includes('Hell');
// valueOf() - returns the primitive value of a variable
x = s.valueOf();

// split() - returns an array of strings
x = s.split('');

console.log(typeof x,x);
