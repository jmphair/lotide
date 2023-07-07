const pigLatin = function (str) {
  let pigLatin = "";
  for (let i = 1; i < str.length; i++) {
    pigLatin += str[i];
  }
  pigLatin += str[0] + "ay";
  return pigLatin;
};

console.log(pigLatin("hello"));