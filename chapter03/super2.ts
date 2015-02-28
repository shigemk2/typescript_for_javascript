class A {
    public x() {
        console.log("I'm A.x!");
    }
}
class B extends A {
    public x() {
        // class Aのxも呼び出している。
        super.x();
        console.log("I'm b.x!");
    }
}
var n = new B();
n.x();
