var canConstruct = function(ransomNote, magazine) {
    const vocab = {};
    
    for (let i = 0; i < magazine.length; i++) {
        const char = magazine[i];
        vocab[char] ? vocab[magazine[i]]++ : vocab[magazine[i]] = 1;
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote[i];
        if (vocab[char] === 0 || !vocab[char]) {
            return false;
        }
        vocab[char]--;
    }
    
    return true;
};


console.log(canConstruct(ransomNote="aa", magazine="aab"))
console.log(canConstruct(ransomNote="aa", magazine="ab"))
console.log(canConstruct(ransomNote="a", magazine="b"))