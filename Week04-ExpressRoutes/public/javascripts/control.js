$(document).ready(function() {
    console.log('Document loaded in prog272');

    $('#read').click(read);
    $('#readJson').click(callReadJson);
    $('#readDerp').click(readDerp);
    $('#add').click(add);

    function add()
    {
        var operatorA = $('#operatorA').val();
        var operatorB = $('#operatorB').val();
        console.log("oPerators: " + operatorA + " and " + operatorB);
        var response = {
            operatorA: operatorA,
            operatorB: operatorB
             };

        $.getJSON('/add', response,function(sum)
        {
            console.log("sum:" + sum);
            $('#display').html(JSON.stringify(sum.sum));
        })
    }

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
