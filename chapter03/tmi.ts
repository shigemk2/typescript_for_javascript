class A {
    public x: number;
}
class B {
    public x: number;
}
interface X {
    myfunc(): A;
}
class Y implements X {
    public myfunc(): B {
        return new B();
    }
}
var y = new Y();
var b = y.myfunc();
console.log(b instanceof A);
console.log(b instanceof B);
