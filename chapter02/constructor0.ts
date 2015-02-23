class A {
    public message : string;
}
var a = new A();
a.message = "Hello!";
console.log(a.message);
var b = new A();
console.log(b.message); // undefined
