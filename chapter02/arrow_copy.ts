class A {
    name = "Hello!";
    func() {
        var f = () => {
            console.log(this.name);
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
