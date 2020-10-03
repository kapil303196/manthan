//CamelCase
const camelCase = function camelCase(str) {
    if (!str) {
        throw "String does not exist error";
    }
    if (str.length == 0) {
        throw "String Empty Error";
    }
    if (/\d/.test(str)) {
        throw "String Invalid Error";
    }
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

//Replace Char
const replaceChar = function replaceChar(str) {
    if (!str) {
        throw "String does not exist error";
    }
    if (str.length == 0) {
        throw "String Empty Error";
    }
    if (/\d/.test(str)) {
        throw "String Invalid Error";
    }
    var firstChar = str[0];
    var count = 0;
    for (var i = 1; i < str.length; i++) {
        if (str.charAt(i).toLowerCase() == firstChar.toLowerCase()) {
            count++;
            if (count % 2 != 0)
                str = str.substring(0, i) + '*' + str.substring(i + 1);
            else
                str = str.substring(0, i) + '$' + str.substring(i + 1);
        }
    }
    return str;
}

//Mashup Char
const mashUp = function mashUp(str1, str2) {
    if (!str1 || !str2) {
        throw "One of the String OR Both Strings does not exist error";
    }
    if (str1.length < 2 || str2.length < 2) {
        throw "String Length Error";
    }
    if (/\d/.test(str1) || /\d/.test(str2)) {
        throw "String Invalid Error";
    }
    return str2[0] + str2[1] + str1.substring(2, str1.length) + ' ' + str1[0] + str1[1] + str2.substring(2, str2.length);
}


module.exports = {
    firstName: "MANTHAN",
    lastName: "PATEL",
    studentId: "10471493",
    camelCase,
    replaceChar,
    mashUp,
};