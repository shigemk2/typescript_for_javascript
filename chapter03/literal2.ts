class A {
    public hello(): void {
        console.log("Hello!");
    }
}
var a = new A();
a.hello();
var a: {
    hello(): void;
} = new A();
a.hello();
