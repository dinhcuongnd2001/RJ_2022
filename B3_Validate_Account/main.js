var regex = /^[_a-z0-9]{6,}$/;

const checkAccount = (str) => {
    return regex.test(str);
}

console.log(checkAccount('123abc_'));
// -> true
console.log(checkAccount('12345'));
// -> false