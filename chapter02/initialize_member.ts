class A {
    public X: number;
    public Y: number = 99;
}
var a = new A();
// console.log(a.X.toString()); // error
console.log(a.Y.toString());
