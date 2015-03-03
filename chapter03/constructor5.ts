class A {
    constructor(public a: string) {
    }
}
var x: A = { a: "Hello", extra: 123 };
console.log(x.a);
