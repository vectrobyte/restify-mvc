var Hello = /** @class */ (function () {
    function Hello() {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        var _this = this;
        this.sum = 0;
        arr.forEach(function (num) { return _this.sum = _this.sum + num; });
    }
    return Hello;
}());
// let hello = new Hello(5, 6, 7, 8, 9);
// console.log(hello.sum);
function ram(instance, hi) {
    console.log(instance.sum, hi);
}
ram(new Hello(5, 6, 7, 8, 9), 'x');
