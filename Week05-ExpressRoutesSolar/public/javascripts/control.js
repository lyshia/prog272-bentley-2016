define(['jquery', 'work', 'about', 'renewables', 'renewablesIndex', 'renewablesYear'],
    function($, work, about, renewables, renewablesByIndex, renewablesByYear) {
        //Do setup work here

        var control = {
            color: "black",
            size: "unisize",
            init: function() {
                //console.log(this.color);
                $('#workButton').click(work.init);
                $('#renewablesButton').click(renewables.init);
                $('#aboutButton').click(about.init);
                work.init();
            }
        };

        return control;
    });

$(document).ready(function() {
    'use strict';

    $('#getRenewableByIndex').click(getByIndex);
    $('#getRenewableByYear').click(getByYear);

    function getByIndex() {
        console.log("get by index called");
        var userInput = $('#renewableByIndexInput').val();
        $.getJSON('/renewableByIndex/' + userInput, function(response) {
                console.log(response);
                $('#debug').html(JSON.stringify(response, null, 4));
            })
            .done(function() {
                console.log("second success");
            })
            .fail(function(a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            })
            .always(function() {
                console.log("complete");
            });
    }

    function getByYear() {
        console.log('get by year calledd');
        var userInput = $('#reneweableByYearInput').val();
        $.getJSON('/renewableByYear/' + userInput, function(response) {
                console.log(response);
                $('#debug').html(JSON.stringify(response, null, 4));
            })
            .done(function() {
                console.log("second success");
            })
            .fail(function(a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            })
            .always(function() {
                console.log("complete");
            });
    }
});
