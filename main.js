'use strict';

function getYearOfBirth(age) {
    return 2018 - age;
}

function createGreeting(name, age) {
    
    if (!age || !name) {
        throw new Error('Arguments not valid');
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

const greeting = createGreeting('Matt', "29");

console.log(greeting);