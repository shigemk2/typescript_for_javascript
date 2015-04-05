class A {
    public x(a: number, c: string) {
        console.log(c+a);
    }
}
class B {
    public x(b: number) {
        console.log(b);
    }
}
var a: A = new B();
a.x(5,"Skyers");
