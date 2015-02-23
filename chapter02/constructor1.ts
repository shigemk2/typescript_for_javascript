class A {
    public message : string;
    constructor() {
        this.message = "Hello!";
    }
}
var a = new A();
console.log(a.message);
var b = new A();
console.log(b.message);
