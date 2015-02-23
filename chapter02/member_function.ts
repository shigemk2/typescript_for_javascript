class A {
    a;
    x() {
        console.log(this.a);
    }
}
var b = new A();
b.a = 123;
b.x();
console.log(b.a);
