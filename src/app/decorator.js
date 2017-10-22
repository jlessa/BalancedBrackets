var decorator = function () {

    var isValid = function (valid) {
        return valid ? '> BRACKET SEQUENCE VALID' : '> BRACKET SEQUENCE NOT VALID';
    }
    return {
        isValid: isValid
    };
}
module.exports = decorator;