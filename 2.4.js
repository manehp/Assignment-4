const arr = ['A', 'B', 'C', 'D', 'E', 'F']
function toHexadecimal(dec) {
    let hexadec = "";
    while (dec >= 16){
        let rem = dec % 16;
        hexadec += remainderHex(rem);

        dec = Math.floor(dec / 16);
    }

    hexadec += remainderHex(dec);

    hexadec = reverseNum(hexadec);
    console.log(hexadec);
    return hexadec;
}

function remainderHex(rem) {
    if(rem > 9) {
        return arr[rem - 10];
    }
    return rem;
}

function reverseNum(num) {
    let i = num.length - 1;
    let result = '';
    while (i >= 0) {
        result += num[i];
        i--;
    }
    return result;
}
return toHexadecimal(12);


module.exports = {
    toHexadecimal: toHexadecimal
}