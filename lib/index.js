"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringBuilder = exports.camelToUnderscore = exports.camelToHyphenated = exports.pascalToUnderscore = exports.pascalToHyphenated = exports.commifyNumber = void 0;
function pascalToHyphenated(pascalName) {
    return keysFromPascalCase(pascalName).join('-');
}
exports.pascalToHyphenated = pascalToHyphenated;
function pascalToUnderscore(pascalName) {
    return keysFromPascalCase(pascalName).join('_');
}
exports.pascalToUnderscore = pascalToUnderscore;
function camelToHyphenated(camelName) {
    return keysFromPascalCase(camelName).join('-');
}
exports.camelToHyphenated = camelToHyphenated;
function camelToUnderscore(camelName) {
    return keysFromPascalCase(camelName).join('_');
}
exports.camelToUnderscore = camelToUnderscore;
function keysFromPascalCase(pascalName) {
    let escaped = pascalName.replace(/[^a-zA-Z0-9]+/, ' ');
    let spaced = escaped
        .replace(/[A-Z]+/g, x => {
        return ' ' + x.toLowerCase();
    })
        .trim();
    return spaced.split(/ +/);
}
function commifyNumber(number) {
    const sNumber = number.toString();
    return sNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
exports.commifyNumber = commifyNumber;
class StringBuilder {
    constructor(_str = '') {
        this._str = _str;
    }
    append(str) {
        this._str += str;
        return this;
    }
    appendLine(str, appendLineIfEmpty = true) {
        if (str.length > 0 || appendLineIfEmpty)
            this.append(str + '\n');
        return this;
    }
    toString() {
        return this._str;
    }
}
exports.StringBuilder = StringBuilder;
//# sourceMappingURL=index.js.map