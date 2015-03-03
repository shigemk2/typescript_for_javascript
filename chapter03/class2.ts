class A {
    public sub() {
        console.log("I'm A.");
    }
}
class B extends A {
    public sub() {
        console.log("I'm B.");
        super.sub();
        // (<A>this).sub();
    }
}
var n = new B();
n.sub();
