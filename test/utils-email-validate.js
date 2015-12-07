'use strict';

// initialise test framework
let chai = require('chai');
// let should = chai.should(); // in-case we need to use should.exist() &c.
chai.should();

// the testee
let validate = require('../library/utils/email/validate');


describe('utils/email/validate', () => {
	validate.should.be.a('function');

	it('validates standard email', () => {
		validate('name@domain.com').should.equal(true);
	});

	it('validates new top level domain', () => {
		validate('john.doe@domain.newtld').should.equal(true);
	});

	it('invalidates bad emails', () => {
		validate('john.doe.domain.com').should.equal(false);
		validate('john.doe@domain').should.equal(false);
		validate('john&doe@domain.com').should.equal(false);
	});
});
