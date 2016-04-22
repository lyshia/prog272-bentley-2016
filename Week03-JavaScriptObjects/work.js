#!/usr/bin/env node

var person = {
    firstName: "Alyshia",
    lastName: "Bentley",
    fullName: function() {
        'use strict';
        return this.firstName + " " + this.lastName;
    }
};

var calculator = {
    operator1: person.firstName.length,
    operator2: person.lastName.length,

    add: function() {
        return this.operator1 + this.operator2;
    },

    subtract: function() {
        return this.operator1 - this.operator2;
    }
};

calculator.operator1 = person.firstName.length;
calculator.operator2 = person.lastName.length;

var multiply = function() {
    return calculator.operator1 * calculator.operator2;
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());
console.log(calculator.add());
console.log(calculator.subtract());
console.log(multiply());
