// クラスを継承したインターフェースを定義することができる。ただし、この場合実装は受け継がれない。
class X {
    f() {
        console.log("I'm in X");
    }
}
interface Y extends X {
}
class Z implements Y {
    // ここでfの実装をやめるとコンパイルエラーになる。
    f() {
        console.log("I'm in Z");
    }
}
var a: X = new Z();
a.f();
