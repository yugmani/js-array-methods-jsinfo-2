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

// Reverse the letters of each word in a group of words.
// ******************************************************

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseWords(str) {
  // Go for it
 return str
          .split(" ")
          .map(item=>item.split("").reverse().join("")) 
          .join(" ")     
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));  // ehT kciuq nworb xof spmuj revo eht yzal .god
console.log(reverseWords('apple'));   //elppa
console.log(reverseWords('a b c d')); //a b c d
console.log(reverseWords('double  spaced  words'));   // elbuod decaps sdrow