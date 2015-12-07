'use strict';

// initialise test framework
let chai = require('chai');
// let should = chai.should(); // in-case we need to use should.exist() &c.
chai.should();

// the testee
let match = require('../library/utils/email/match');


describe('utils/email/match', () => {
	match.should.be.a('regexp');

	it('matches standard email', () => {
		match.test('name@domain.com').should.equal(true);
	});

	it('matches new top level domain', () => {
		match.test('john.doe@domain.newtld').should.equal(true);
	});

	it('does not match bad emails', () => {
		match.test('john.doe.domain.com').should.equal(false);
		match.test('john.doe@domain').should.equal(false);
		match.test('john&doe@domain.com').should.equal(false);
	});
});
