class A {
    public x: number;
}
class B extends A {
    public y: number;
}
class C {
    public x: B;
}
class D extends C{
    public x: A;
}
