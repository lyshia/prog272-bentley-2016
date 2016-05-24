define(['jquery', 'about', 'work', 'renewables','renewablesByIndex', 'renewablesByYear'],
function($,about, work,renewables, renewablesByIndex, renewablesByYear) {
    //Do setup work here


    function showBar() {
        //console.log('Show Bar Clicks called now');
        $('#display2').html('bar');
    }

    var control = {
        color: "black",
        size: "unisize",
        setup: function() {
            $(document).on('click', '#showClick', showBar);
            $('#display2').html(control.color + ' - ' + control.size);
        },
        init: function() {
            $('#aboutButton').click(about.init);
            $('#workButton').click(work.init);
            $('#renewablesButton').click(renewables.init);
            $('#renewablesByIndexButton').click(renewablesByIndex.init);
            $('#renewablesByYearButton').click(renewablesByYear.init);
            work.init();
        }
    };

    return control;
});
/*
$(document).ready(function() {
    'use strict';

//    $('#getRenewable').click(getRenewables);
  //  $('#getRenewableByIndex').click(getByIndex);
//    $('#getRenewableByYear').click(getByYear);

//    $('#renewableButton').click(renewables.init);
//    $('#renewablesByIndexButton').click(renewablesByIndexButton.init);





});
*/
