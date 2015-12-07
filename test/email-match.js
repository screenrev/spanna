'use strict';

// initialise test framework
let chai = require('chai');
chai.should();

// the testee
let match = require('../email/match');


describe('email/match', () => {
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
