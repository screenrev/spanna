'use strict';

// initialise test framework
let chai = require('chai');
let should = chai.should(); // in-case we need to use should.exist() &c.
// chai.should();

// the testee
let email = require('../library/utils/email');


describe('utils/email', () => {
	it('has all methods & properties', () => {
		should.exist(email.match);
		should.exist(email.validate);
	});
});
