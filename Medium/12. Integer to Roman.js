var intToRoman = function (num) {
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const hund = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const thou = ["", "M", "MM", "MMM"];
  return `${thou[Math.floor(num / 1000)]}${
    hund[Math.floor((num % 1000) / 100)]
  }${tens[Math.floor((num % 100) / 10)]}${ones[Math.floor(num % 10)]}`;
};

console.log(intToRoman(3001));
