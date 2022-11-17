

function Factorial(n){
    if(n ===0 || n ===1){
        console.log(1);
    }
    for(let i = n - 1; i>=1;i--){
        n = n*i;
    }
    console.log(n);
}
return Factorial(8);

module.exports = {
    factorial: factorial
}