class A {
    a: string;
    other: string;
}
class B {
    a: string;
    other: string;
}
var x: { a: string; };
x = new A();
x.a = "Hello1!";
console.log(x.a);
x = new B();
x.a = "Hello2!";
console.log(x.a);
