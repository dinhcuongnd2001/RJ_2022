var regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;

function is_usZipCode(str) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regexp.test(str)) {
        return true;
    } 
    return false;
}

var zipCode = '01234-1234'
console.log(is_usZipCode(zipCode));
// -> true
var test = '1234-11'
console.log(is_usZipCode(test))
// -> False;