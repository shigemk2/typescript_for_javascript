class A {
    name = "Hello!";
    func() {
        var f = ()=> {
            // ここのクラスはクラスAのオブジェクト
            console.log(this.name);
        }
        f();
    }
}
var a = new A();
a.func();

class B {
    title = "Hello!";
    func() {
        var f = function () {
            // ここのthisはグローバルオブジェクト
            console.log(this.title);
        }
        f();
    }
}
var b = new B();
b.func();
