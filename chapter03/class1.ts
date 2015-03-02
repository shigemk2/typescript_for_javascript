class A {
    public x: string = "class A";
    public f2() {
        console.log(this.x);
    }
    public f1() {
        this.f2();
    }
}
class B extends A {
    public y: string = "class B";
    public f2() {
        console.log("I'm " + this.y + " not " + this.x );
    }
}
var n = new B();
n.f1();
