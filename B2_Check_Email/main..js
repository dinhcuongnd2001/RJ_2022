var regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/

function checkEmail(str) {
    if (regexp.test(str)) {
        return true;
    } 
    return false;
}

var zipCode = 'abc@gmail.com'
console.log(checkEmail(zipCode));
// -> true
var test = 'zyx.cm.@.com'
console.log(checkEmail(test))
// -> False;