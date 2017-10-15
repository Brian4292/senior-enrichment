'use strict';
const api = require('express').Router()
const db = require('../db')


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

api.use('/campus', require('./campus.js'));  // middleware to route to campus 
api.use('/students', require('./students.js')); // middlewareto route to students


module.exports = api;