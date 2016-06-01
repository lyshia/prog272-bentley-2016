define(['home'], function(home) {


    fdescribe('Home Page Suite', function () {

        'use strict';

        it('expects true to be true', function () {
            expect(true).toBe(true);
        });

        it('expects home.color to be red', function () {
            expect(home.page).toBe('Home');
        });

        it('expects home.size to be big', function () {
            expect(home.size).toBe('Page');
        });

    });

});
