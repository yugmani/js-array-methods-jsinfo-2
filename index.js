// Map to names
// *************************************

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let users = [john, pete, mary];

let names = users.map((user) => user.name);
console.log(names); //["John", "Pete", "Mary"]

// Map to objects
// **************************************

// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let johnS = { name: 'John', surname: 'Smith', id: 1 };
let peteH = { name: 'Pete', surname: 'Hunt', id: 2 };
let maryK = { name: 'Mary', surname: 'Key', id: 3 };

let usersGroup = [johnS, peteH, maryK];

let usersMapped = usersGroup.map((user) => ({
  // note that we need additional brackets '()'.
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped);
/* 
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
console.log(usersMapped[0].id); //1
console.log(usersMapped[0].fullName); //John Smith

// Sort users by age
// ****************************************

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

const sortByAge = (arr) => {
  return arr.sort((a, b) => a.age - b.age);
};

console.log(sortByAge(users));
// [{ name: 'John', age: 25 }, { name: 'Mary', age: 28 }, { name: 'Pete', age: 30 }]

// Shuffle an array
// ******************************************************

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

const shuffle = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let random = Math.floor(Math.random() * arr.length);

    if (newArr.includes(arr[random])) {
      i = i - 1;
      continue;
      // random = Math.floor(Math.random() * arr.length);
    }

    newArr.push(arr[random]);
  }
  return newArr;
};

console.log(shuffle([1, 2, 3]));
// [2, 1, 3], [1, 2, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]

// suggested to read description
// const shuffleArray = (arr)=>{
//   return arr.sort(()=> Math.random() - 0.5);
// }

// console.log(shuffleArray([123]));

//Get average age
// ******************************************************

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

let johny = { name: 'John', age: 25 };
let peter = { name: 'Pete', age: 30 };
let marry = { name: 'Mary', age: 29 };

let arrayUsers = [johny, peter, marry];

const getAverageAge = (arr) => {
  let total = arr
    .map((item) => item.age)
    .reduce((prev, current) => prev + current);
  return total / arr.length;
};

console.log(getAverageAge(arrayUsers)); //28

// suggested alternative
function calculateAverage(arr) {
  return arr.reduce((prev, current) => prev + current.age, 0) / arr.length;
}

console.log(calculateAverage(arrayUsers)); //28

// Filter unique array members
// ******************************************************

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.
function unique(arr) {
  let newArr = [];
  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });

  return newArr;
}

let strings = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.log(unique(strings)); // ["Hare", "Krishna", ":-O"]

// Reverse the letters of each word in a group of words.
// [codewars.com]
// ******************************************************

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseWords(str) {
  // Go for it
  return str
    .split(' ')
    .map((item) => item.split('').reverse().join(''))
    .join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); // ehT kciuq nworb xof spmuj revo eht yzal .god
console.log(reverseWords('apple')); //elppa
console.log(reverseWords('a b c d')); //a b c d
console.log(reverseWords('double  spaced  words')); // elbuod decaps sdrow
