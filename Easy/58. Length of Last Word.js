//First Attempt 55ms | 41.88MB
// var lengthOfLastWord = function(s) {
//     let strArray = s.split(" ").filter(item => item !== "")
//     let count = strArray[strArray.length - 1].length
//     return count
// };

//Second Attempt 44ms | 41.47MB
var lengthOfLastWord = function(s) {
    let trimmedArray = s.trim().split(" ")
    return trimmedArray[trimmedArray.length - 1].length
};

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))
