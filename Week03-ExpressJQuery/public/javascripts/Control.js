
var MyObject = (function() {

    // constructor
    function MyObject() {
        $('#sendString').click(showString);
        $('#getItems').click(showItems);
        $('#getMarie').click(showMarie);
    }

    function showString() {
        $('#stringHolder').html('Send string was clicked');
    }

    MyObject.prototype.readyCalled = function() {
        $("#readyCalled").html("Ready was called and myObjected created");
    };

    var marie = {
        "firstName": "Marie",
        "lastName": "Curie",
        "city": "Paris",
        "country": "France"
    };


    function showItems() {
        $("#myList").append('<li>' + 'item01' + '</li>');
        $("#myList").append('<li>' + 'item02' + '</li>');
        $("#myList").append('<li>' + 'item03' + '</li>');
    }

    function showMarie()
    {
        for (var property in marie) {
            if (marie.hasOwnProperty(property)) {
                $("#marieList").append('<li>' + marie[property] + '</li>');
            }
        }
    }

    return MyObject;
}());


$(document).ready(function() {
    var myObject = new MyObject();
    myObject.readyCalled();
});