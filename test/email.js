'use strict';

// initialise test framework
let chai = require('chai');
let should = chai.should();

// the testee
let email = require('../email');


describe('email', () => {
	it('has all methods & properties', () => {
		should.exist(email.match);
		should.exist(email.validate);
	});
});
