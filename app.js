var balanced = require('./src/app/balanced.js')();
var decorator = require('./src/app/decorator')();

var stdin = process.openStdin();

console.log('Enter the Brackets Sequence or Ctrl+c to exit\n');

stdin.addListener("data", function (data) {
    console.log(decorator.isValid(
        balanced.isBalanced(
            data.toString().trim()
        )
    ));
    data = "";
    console.log('Enter the Brackets Sequence or Ctrl+c to exit\n');
});