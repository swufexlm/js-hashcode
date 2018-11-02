const MIN = -2147483648;
const MAX = 2147483647;

function toJavaInt(number) {
    if (number > MAX) {
        const rest = number - MAX;
        const mod = rest % (MAX - MIN + 1);
        return MIN + mod - 1;
    } else if (number < MIN) {
        const rest = MIN - number;
        const mod = rest % (MAX - MIN + 1);
        return MAX - mod + 1;
    }
    return number;
}

module.exports = toJavaInt;
