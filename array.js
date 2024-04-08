let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];
// Array Constructor
// const fruits = new Array('apple', 'grape', 'orange');
// Get value by index
// x = numbers[0];
// numbers[2]=777;
// x = numbers[0] + numbers[3];

// x = `My favorite fruit is an ${fruits[2]}`;
// x = numbers.length;
// fruits.length = 2;
// fruits[2] = 'pear';

// fruits[3] = 'strawberry';

// Using the length as the index will always add on the the end
// fruits[fruits.length] = 'blueberry';
// fruits[fruits.length] = 'peach';
// x=fruits


// const arr = [28, 38, 44, 29, 109];
// arr.push(88);
// arr.unshift(99);
// arr.pop();
// arr.shift();
// x=arr.indexOf(38);
// x=arr.includes(44);
// x=arr.reverse();

// x = arr.toString();
// x = arr.join("/");

// slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be not included in the new array.
// x = arr.slice(1, 4);

// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not


// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
// x = arr.splice(1, 4);
// const arr = [28, 38, 44, 29, 109];
//29,44,38
// Chaining methods - Some methods can be chained depending on the return value.
// x = arr.slice(1, 4).reverse().toString().charAt(2);
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// Nesting arrays
// fruits.push(berries);
// Create a new variable and nest both arrays
// const allFruits = [fruits, berries];
// concat() - Concatenate arrays
// x = fruits.concat(berries);
// spread operator (...) - Concatenate with
// x = [...fruits,...berries];
// flat() - Flatten an array

// const arr = [1, 2, [3, 4, 5,[44,555]], 6, [7, 8]];
// x = arr.flat(Infinity);
// isArray() - Check is is an array

x = Array.isArray(fruits);
// from() - Create an array from an array like value
x = Array.from('123455');
// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x,typeof x);



