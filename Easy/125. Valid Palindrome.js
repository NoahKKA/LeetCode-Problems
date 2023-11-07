

var isPalindrome = function(s) {
    let str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let rev = str.split("").reverse().join("");
    return (str == rev) ? true : false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))