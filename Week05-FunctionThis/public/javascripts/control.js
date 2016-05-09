function getNine() {
    return 9;
}

function getThis() {
    return this;
}

var getThisAnonymous = function() {
    return this;
}

$(document).ready(function() {
    'use strict';
});

function getThisStrict() {
    'use strict';
    return;
}

var MyFunction = function() {};

MyFunction.prototype.getThis = function() {
    return this;
}

var myFunction = new MyFunction();

myFunction.getThis = function() {
    return myFunction;
}

var myObject = function() {
    this.getThis = function() {
        return myObject;
    }
}

myObject.getThis = function() {
    return myObject;
}
