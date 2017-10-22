var should = require('should');


describe('Balanced Tests:', function () {
    describe('is Balanced', function () {
        it('should be valid string', function () {
            var input = "(){}[]"; 

            var balanced = require('../app/balanced.js')();
            var valid = balanced.isBalanced(input);


            valid.should.equal(true);            

        });

        it('should not be valid string', function () {
            var input = "[]{()"; 

            var balanced = require('../app/balanced.js')();
            var valid = balanced.isBalanced(input);


            valid.should.not.equal(true);            

        });
    });
});