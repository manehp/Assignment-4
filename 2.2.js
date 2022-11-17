function Gcd(x,y){

    while (y > 0){
        let z = y;
        y = x % y;
        x = z;
    }
    console.log(x); 
}
return Gcd(3,13)

module.exports = {
    Gcd: Gcd
}
