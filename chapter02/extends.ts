// extendsはECMA6の仕様で、TypeScriptはそれを踏襲している
// typescriptなので独自の型を作成することができるし、継承もできる
class A {
}
class B extends A{
    public a() {
        console.log("1");
    }
}
var x1 = new B();
var x2:A = new B();
console.log(x1.a());
console.log(x2);
