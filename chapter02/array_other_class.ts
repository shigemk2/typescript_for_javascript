class A {
    public a: string;
}
class B {
    public a: string;
}
class C {
    public a: string;
}
var a = new A();
var b = new B();
var c = new C();
var array: A[] = [b, c];
array[0].a = "hello!";
array[1].a = "world!";
console.log(array[0].a);
console.log(array[1]);
console.log(c);
console.log(a);
