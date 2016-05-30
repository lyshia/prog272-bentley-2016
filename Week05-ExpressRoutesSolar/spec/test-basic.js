/**
 * Created by charlie on 10/7/15.
 */

define(['work'], function(work) {

    'use strict';

    describe('Home Page Suite', function() {

        it('expects true to be true', function() {
            expect(true).toBe(true);
        });

        it('expects home.color to be red', function() {
            expect(work.color).toBe('red');
        });

        it('expects home.size to be big', function() {
            expect(work.size).toBe('big');
        });

    });

});
