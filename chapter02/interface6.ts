interface a {
    f();
}
class c implements a {
    public f() {
        alert("I'm in c");
    }
}
// このように書いてもコンパイル出来る
var x: a = new c();
var y: { f() } = x;
y.f();
