class A {
    public x = "I'm instance member";
    public static x = "I'm static member";
}
var a = new A();
console.log(a.x);
console.log(A.x);
