var longestCommonPrefix = function(strs) {
    let output = ''
    if(strs.length === 0){
        return output
    }
    for(let i = 0; i < strs[0].length; i++){
        for(let j = 1; j < strs.length; j++){
            if(strs[j][i] !== strs[0][i]){
            return output
            }
        }
        output = output + strs[0][i]
    }
    return output
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
