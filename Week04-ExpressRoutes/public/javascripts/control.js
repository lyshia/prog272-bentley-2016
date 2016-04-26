$(document).ready(function() {
    console.log('Document loaded in prog272');

    $('#read').click(callRead);
    $('#readJSON').click(callReadJ);

    function callRead() {
        console.log('callRead called');
        $.getJSON('/read', function (result) {
            console.log(result);
            $('#display').html(JSON.stringify(result));
        })
    }

    function callReadJ() {
        console.log('callReadJ called');
        $.getJSON('names.json', function (result) {
            console.log(result);
            $('#display').html(JSON.stringify(result));
        })
    }
});