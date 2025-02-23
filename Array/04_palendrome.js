const revStr = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed === word;
};
let word = "cddc";
console.log(revStr(word));
