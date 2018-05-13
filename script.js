//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

var speak = function(saywhat) {
  console.log(saywhat);
}

var Person = function() {
  var name, hobby;
}

var Person2 = function() {
  var name, hobby;
}

Person.prototype.speak = speak;
Person2.prototype.speak = speak;

firstPerson = new Person;
firstPerson.name = "John";
firstPerson.hobby = "Soccer";
firstPerson.speak("I love soccer!");

firstPerson2 = new Person2;
firstPerson2.name = "Mary";
firstPerson2.hobby = "Fishing";
firstPerson2.speak("Go fish!");

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var array = [5, 8, 7, 21, 2, 9, 71, 65, 9, 10,];

console.log(array.slice(4, 5));

//3. Delete the last number in the array that you created above.

array.splice(10, 1);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to
//banana and strawberries to bananas:

function gobananas(change) {
    if (typeof change !== 'string') return "Do you want strawberries or bananas?";

    change = change.replace(/Strawberries/g, 'Bananas');
    change = change.replace(/strawberries/g, 'bananas');
    change = change.replace(/strawberry/g, 'banana');
    return change;
}
gobananas("Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.");


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var footballClubs = ["Arsenal", "Tottenham", "Chelsea", "Liverpool"];
document.getElementById("football").innerHTML = footballClubs;


function myFunction() {
  footballClubs = []; // remove the elements from array
      footballClubs.push("Toyota", "Audi", "Volvo", "Ford");
      document.getElementById("football").innerHTML = footballClubs;
      console.log(footballClubs);
  }

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var people = [
  {name: "Brad Pitt"},
  {name: "Queen Elizabeth"},
  {name: "Mick Jagger"}
];

var findNames = people.filter(function(name) {
    return name.name === "Brad Pitt";
});

console.log(findNames);

//7. Create a simple function that logs the date.
var d = new Date();

console.log(d);
