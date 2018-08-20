'use strict';

function getYearOfBirth(age) {
    return 2018 - age;
}

function createGreeting(name, age) {
    const yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}.`;
}

const greeting = createGreeting('Matt', 37);

console.log(greeting);