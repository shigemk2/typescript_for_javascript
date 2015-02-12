class A {
    name = "Hello!";
    func() {
        var _this = this;
        var f = function() {
            console.log(_this.name);
        }
        f();
    }
}
var a = new A();
a.func();
class B {
    name = "World";
    func() {
        var f = a.func;
        f();
    }
}
var b = new A();
b.func();
