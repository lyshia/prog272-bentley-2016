function objectToArray(obj) {
    'use strict';
    //console.log(obj);
    // Create the array and fill it
    var objectAsArray = [];
    for (var key in obj) {
        console.log(obj[key]);
        objectAsArray.push([key, obj[key]]);
    }

    objectAsArray.sort(function(a, b) {
        return a[1] > b[1];
    });

    return objectAsArray;
}
module.exports.objectToArray = objectToArray;
