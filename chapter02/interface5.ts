interface a {
    f();
}
interface b {
    f();
}
class c implements a {
    public f() {
        console.log("I'm in c");
    }
}
// 、インターフェースa型の変数からインターフェースb型の変数への代入か可能
var x: a = new c();
var y: b = x;
y.f();
