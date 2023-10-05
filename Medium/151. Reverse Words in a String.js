var reverseWords = function(s) {
    //get rid of extra spaces using regex and trim method
    let cleanedString = s.replace(/\s+/g, ' ').trim();
    //reverse word
    let reversedString = cleanedString.split(" ").reverse().join(" ")
    return reversedString
};

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world  "))
console.log(reverseWords("a good   example"))