'use strict';

function getYearOfBirth(age) {
    return 2018 - age;
}

function createGreeting(name, age) {
    
    if (!age || !name) {
        throw new Error('Arguments not valid');
    }

    if (age < 0) {
        throw new Error('Age cannot be negative');
    }
    const yearOfBirth = getYearOfBirth(age);

    
    return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}.`;
}

const greeting = createGreeting('Matt');

console.log(greeting);