class A {
    public t1: string = "t1 in A";
}
class B
extends A {
    public t2: string;
}
class C extends A {
    public t3: string;
}class D {
    constructor(a: B);
    constructor(a: C);
    constructor(a: A) {
        console.log(a.t1);
    }
}
var z1 = new D(new B());
var z2 = new D(new C());
