var request = require('supertest');
var app = require('../app');
var renewables = require('./data/json-as-js-renewables');
var energyUtils = require('../routes/energy-utils');

describe('Spec Routes Student Suite', function() {
    'use strict';

    it('shows renewables route returns an object array with length set to 12', function(done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                expect(response.body.result).toBe('Success');
                //console.log(response.body.renewables);
                expect(response.body.renewables.length).toBe(12);
            })
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
        //    expect(true).toBe(false);
    });

    it('shows the renewables route, parse text property of response' +
        'object and show first object contains 2017',
        function(done) {

            request(app)
                .get('/renewables')
                .expect(200)
                .expect('Content-Type', /json/)
                .expect(function(response) {
                    var json = JSON.parse(response.body.result);
                    expect(json).toBe('Success');
                    //console.log(response.body.renewables);

                    expect(json[0]).toMatch('2017');
                })
                .end(function(err, res) {
                    if (err) {
                        throw err;
                    }
                    done();
                });
            // FILL IN THE CODE FOR THE TEST HERE. THEN REMOVE THE BOOLEAN TEST SHOWN BELOW THIS LINE
            //      expect(true).toBe(false);
        });
});
