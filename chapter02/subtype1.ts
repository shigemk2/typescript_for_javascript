class A {
    public x: number;
}
class B extends A {
    public y: number;
}
class C {
    public x: A;
}
class D extends C{
    public x: B;
}

var d = new B();
d.y = 123;
console.log(d.y);
