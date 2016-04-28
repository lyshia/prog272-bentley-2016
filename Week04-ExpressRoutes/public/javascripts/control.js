$(document).ready(function() {
    console.log('Document loaded in prog272');

    $('#read').click(read);
    $('#readJson').click(callReadJson);
    $('#readDerp').click(readDerp);

    function read() {
        console.log('callRead called');
        //foo();
        $.getJSON('/read', function(result) {
            console.log(result);
            $('#display').html(JSON.stringify(result));
        })
    }

    function readDerp() {
        console.log('readDerp called');
        //foo();
        $.getJSON('/readDerp', function(result) {
            console.log(result);
            $('#display').html(JSON.stringify(result));
        })
    }

    function callReadJson() {
        console.log('readJson called');
        $.getJSON('names.json', function(result) {
            console.log(result);
            $('#display').html(JSON.stringify(result));
        })
    }
});