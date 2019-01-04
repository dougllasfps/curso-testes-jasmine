function Calc(){}

Calc.prototype.add = function(number, otherNumber){
    if( !number && !otherNumber){
        throw "numbers can't be null";
    }

    return 3;
}