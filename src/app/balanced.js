var balanced = function () {

    var isBalanced = function (str) {
        var i, ch, expectedBracket;

        var stack = [];
        var len = str.length;

        var openingBrackets = ['[', '{', '('];
        var closingBrackets = [']', '}', ')'];

        for (i = 0; i < len; i++) {
            ch = str[i];
            //If there is an open Bracket, put on the stack
            if (openingBrackets.indexOf(ch) > -1) {
                stack.push(ch);
            } else if (closingBrackets.indexOf(ch) > -1) {
                //Check if there is an expected Bracket
                expectedBracket = openingBrackets[closingBrackets.indexOf(ch)];

                //If don't have, return false
                if (stack.length === 0 || (stack.pop() !== expectedBracket)) {
                    return false;
                }

            } else {
                // Ignore the characters which do not match valid Brackets symbol
                continue;
            }
        }
        //If the stack don't have any pending bracket, return true
        return (stack.length === 0);
    };

    return {
        isBalanced: isBalanced
    };
}

module.exports = balanced;