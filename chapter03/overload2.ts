class A {
    constructor()
    constructor(a: string);
    constructor(a: number);
    constructor(a?: any) {
        console.log(a);
    }
}
var a = new A(123);
var b = new A("ABC");
var a = new A();
