let text = "";


function PrintPlus(n){
  for (let i = 1; i <= n; i++) {

    for (let j = 0; j < n - i; j++) {
      text += " ";
    }
  
    for (let k = 0; k < i; k++) {
      text += "+";
    }
    text += "\n";  
}
console.log(text);
}

return PrintPlus(5);  


module.exports = {
  PrintPlus: PrintPlus
}