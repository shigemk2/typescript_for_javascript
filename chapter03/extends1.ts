class A {
    public x: number = 3;
}
class B extends A {
    public x: number = 4;
}
var b = new B();
console.log(b.x);
