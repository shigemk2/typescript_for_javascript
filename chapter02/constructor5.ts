class A {
    constructor(public message : string) {
        if (message == undefined) this.message = "no value";
    }
}
var a = new A("Hello!");
console.log(a.message);
var b = new A();
console.log(b.message);
