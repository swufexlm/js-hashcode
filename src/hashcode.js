const toJavaInt = require('./int');

function hashCode(str) {
    var h = 0;
    var len = str.length;
    for (var i = 0; i < len; i++) {
        h = toJavaInt(31 * h + str.charCodeAt(i));
    }
    return h;
}

module.exports = hashCode;
