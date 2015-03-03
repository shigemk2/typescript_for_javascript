class A {
    constructor(public a: string) {
    }
    public extra: number;
}class B {
    constructor(public a:string) {
    }
}
// error TS2322: Type 'B' is not assignable to type 'A'.
//   Property 'extra' is missing in type 'B'.
var x: A = new B("Hello");
console.log(x.a);
