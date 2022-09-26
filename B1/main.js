regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
function is_usZipCode(str) {
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

console.log('hello this the test commit');
console.log('hello this the test commit');
