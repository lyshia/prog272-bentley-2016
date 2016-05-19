$(document).ready(function() {
   'use strict';

   $('#getRenewable').click(getRenewables);
   $('#getRenewableByIndex').click(getByIndex);
   $('#getRenewableByYear').click(getByYear);

   function getRenewables() {

       $.getJSON('/renewables', function(response) {
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
       $.getJSON('/renewablesByYear/' + userInput, function(response) {
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
       $.getJSON('/renewablesByYear/' + userInput, function(response) {
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
/*

define(['jquery', 'about', 'work'], function($, about, work) {
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
           //console.log(this.color);
           that = this;
           $('#aboutButton').click(about.init);
           $('#workButton').click(work.init);
           $('#elf-view').load('/main', this.setup);
       }
   };

   return control;
});
*/
