class A {
    private X: string = "I'm private";
}
var a: any = new A();
console.log(a.X);
var b = new A();
// console.log(b.X); // error
