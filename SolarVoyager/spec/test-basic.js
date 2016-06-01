/**
 * Created by charlie on 10/7/15.
 */
/*
describe('Elvenware Simple Plain Suite Basic', function() {

    'use strict';

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

});

*/
define(['home'], function(home) {


    describe('Home Page Suite', function () {

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
