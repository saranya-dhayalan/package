var Add = (function () {
    function Add() {
    }
    Add.prototype.arithmatic = function (a, b) {
        console.log(a + b);
    };
    return Add;
}());
var obj = new Add();
obj.arithmatic(4, 5);
