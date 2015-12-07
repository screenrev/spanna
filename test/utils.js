'use strict';

// initialise test framework
let chai = require('chai');
let should = chai.should(); // in-case we need to use should.exist() &c.
// chai.should();

// the testee
let utils = require('../library/utils');


describe('utils', () => {
	it('has all methods & properties', () => {
		should.exist(utils.email);
	});
});
