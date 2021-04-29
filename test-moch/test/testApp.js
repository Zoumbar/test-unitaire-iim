var chai = require('chai');
var expect = require('chai').expect;
var app = require('../app');

describe('String miniscule', function () {

	it('doit retourner un string en minuscule', function(){
		var inputValue = 'CECI EST UN TEST';
		var outputValue = app.stringCleaner(inputValue);

		expect(outputValue).to.equal('ceci est un test');
		expect(outputValue).to.not.equal('CECI EST UN TEST');
	});

	it('doit retourner un string', function(){
		var outputValue = app.stringCleaner('CECI EST UNE STRING');
		expect('CECI EST UNE STRING').to.be.a('string');
	});

	it('doit retourner un string sans tirets', function(){
		var inputValue = 'JE-NE-VEUX-PAS-DE-TIRETS';
		var outputValue = app.stringCleaner(inputValue);
		expect(outputValue).to.equal('je ne veux pas de tirets');
	});
});