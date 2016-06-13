define(function() {
    //Do setup work here
    'use strict';
    var about = {
        color: 'Green',
        size: 'LittleGreen',
        init: function() {
            console.log(about.color);
            //var that = this;
            $('#elf-view').load('/about', function() {
                $('#display').html(about.color + ' ' + about.size);
            });
        }
    };
    return about;
});
