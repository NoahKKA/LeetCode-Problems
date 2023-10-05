//First Attempt 112ms | 49.3MB
// var romanToInt = function(num) {
//     let count = 0;
//     for(let i = 0; i < num.length; i++){
//         if(["V", "L", "D", "M"].includes(num[i])){
//             switch (num[i]) {
//                 case "V":
//                     count += 5
//                     break;
//                 case "L":
//                     count += 50
//                     break;
//                 case "D":
//                     count += 500
//                     break;
//                 case "M":
//                     count += 1000
//                     break;
//             }
//         } else if (["I", "X", "C"].includes(num[i])){
//             switch(num[i]) {
//                 case "I":
//                     if(num[i + 1] == "V"){
//                         count += 4
//                         i++
//                     } else if (num[i + 1] == "X"){
//                         count += 9
//                         i++
//                     } else {
//                         count++
//                     }
//                     break;
//                 case "X":
//                     if(num[i + 1] == "L"){
//                         count += 40
//                         i++
//                     } else if (num[i + 1] == "C"){
//                         count += 90
//                         i++
//                     } else {
//                         count += 10
//                     }
//                     break;
//                 case "C":
//                     if(num[i + 1] == "D"){
//                         count += 400
//                         i++
//                     } else if (num[i + 1] == "M"){
//                         count += 900
//                         i++
//                     } else {
//                         count+= 100
//                     }
//                     break;
//             }
//         }
//     }
//     return count;
// };

//Second Attempt 96ms | 47.9MB
var romanToInt = function(s) {
    let sym = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    }
    let output = 0;
     for (let i = 0; i < s.length; i++) {
    if (i > 0 && sym[s[i]] > sym[s[i - 1]]) {
      output += sym[s[i]] - 2 * sym[s[i - 1]];
    } else {
      output += sym[s[i]];
    }
  }
    return output
};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))