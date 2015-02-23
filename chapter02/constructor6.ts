class A {
    public message: string;
    // これは無理
    constructor(m?: string = "Hello!") {
        if (m == undefined)
            this.message = "no value";
        else
            this.message = m;
    }
}
var a = new A("Hello!");
console.log(a.message);
var b = new A();
console.log(b.message);
