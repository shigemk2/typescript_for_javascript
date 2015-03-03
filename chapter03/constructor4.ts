class A {
    constructor(public a: string) {
    }
}
class B {
    constructor(public a:string) {
    }
    public extra: number;
}
var x: A = new B("Hello");
console.log(x.a);
