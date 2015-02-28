// 関数がオーバーライドされてしまったからだ。クラスBを経由してアクセスする限り、関数xはクラスBのものが使用される。
class A {
    public x() {
        console.log("I'm A.x!");
    }
}
class B extends A {
    public x() {
        console.log("I'm b.x!");
    }
}
var n = new B();
n.x();
