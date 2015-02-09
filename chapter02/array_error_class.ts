class A {
    public a: string;
}
class B {
    public a: string;
}
class C {
    public a: string;
}
class D {
    public d: string;
}
var a = new A();
var b = new B();
var c = new C();
var d = new D();
var array: A[] = [d, b, c];
array[0].a = "hello!";
console.log(array[0]);
console.log(array[0].a);
