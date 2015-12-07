'use strict';

const RE = require('./match');

module.exports = email => RE.test(email);
