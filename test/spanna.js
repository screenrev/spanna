'use strict';

// initialise test framework
let chai = require('chai');
let should = chai.should();

// the testee
let spanna = require('../spanna');


describe('spanna', () => {
	it('has all methods & properties', () => {
		should.exist(spanna.email);
	});
});
