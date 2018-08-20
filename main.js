'use strict';

function createGreeting(name, age) {
    return `Hi, my name is ${name} and I am ${age} years old.`;
}

const greeting = createGreeting('Matt', 37);

console.log(greeting);