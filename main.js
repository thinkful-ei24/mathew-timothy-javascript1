'use strict';

function getYearOfBirth(age) {
    return 2018 - age;
}

function createGreeting(name, age) {
    
    // if (!age || !name) {
    //     throw new Error('Arguments not valid');
    // }

    if (name === undefined || age === undefined) {
        throw new Error('Arguments not valid.');
    }

    if (typeof age !== 'number') {
        throw new Error('This is not a number');
    }

    if (age < 0) {
        throw new Error('Age cannot be negative');
    }
    const yearOfBirth = getYearOfBirth(age);

    
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}.`;
}

const greeting = createGreeting(0, 0);

console.log(greeting);

function jediName(firstName, lastName){
    return lastName.slice(0,3) + firstName.slice(0,2);
}
console.log(jediName("Timothy", "Chang"));

function beyond(num){
  if(num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) console.log("And beyond")
  else if(num > 0) console.log("To infinity")
  else if(num < 0) console.log("To negative infinity")
  else console.log("Staying home");
}

function decode(word){
  const array = ['a', 'b', 'c', 'd'];
  const firstLetter = word.slice(0,1);
  
  if(array.indexOf(firstLetter) === -1){
    return '';
    }
  const array2 = [2,3,4,5];
  const index = array.indexOf(firstLetter);
  const characterIndex = array2[index];
  return word.charAt(characterIndex - 1);
}

const message = 'craft block argon meter bells brown croon droop';
const words = message.split(' ');
words.forEach(word => 
  console.log(decode(word))
)

// Matt started here
//How many days in a month?
function howManyDays(month, leapYear) {
  switch(month.toLowerCase()) {
    case 'january': //31
    case 'march': // 31
    case 'may': //31
    case 'july': //31
    case 'august': //31
    case 'october': //31
    case 'december': //31
      return `${month} has 31 days in it`;
    case 'april': // 30
    case 'june': // 30
    case 'september': //30
    case 'november': //30
      return `${month} has 30 days in it`;
    case 'february': //28 or 29
      if (leapYear === true) {
        return `${month} has 29 days in it`;
      } else {
        return `${month} has 28 days in it`;
      }
  }
  return new Error("Must provide a valid month.")
}

console.log(howManyDays('feb', true));

// Rock Paper Scissors

function rockPaperScissors(choice){
  if(choice < 1 || choice > 3){
    throw new Error("Invalid choice");
  }
  const choices = ['rock', 'paper', 'scissor'];
  const myChoice = choices[choice - 1];
  console.log(myChoice);
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);

  if(myChoice === computerChoice) return 'You tied';
  else if(myChoice === 'rock' && computerChoice === 'scissor'){
    return 'You win';
  }  else if (myChoice === "paper" && computerChoice === 'rock'){
    return 'You win';
  } else if (myChoice === 'scissor' && computerChoice ==='paper'){
    return 'You win';
  } else return 'You lose';
}

console.log(rockPaperScissors(2));