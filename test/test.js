var assert = require('assert');
var httpFunction = require('../HttpTriggerJS/index.js');

describe('Function', function() {
  describe('HttpTriggerJS', function() {
    it('should return 200', function() {
        var context = getContextObject();
        context.done = function() {
            assert.equal(this.res.status, 200);
            assert.equal(this.res.body, "Hello");
        }
        httpFunction(context);
    });
  });
});

function getContextObject() {
    return {
        res: null,
        log: function() {
            console.log(arguments);
        },
        done: null
    }
}