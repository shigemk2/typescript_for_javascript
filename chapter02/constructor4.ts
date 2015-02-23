class A {
    public message: string;
    constructor(m?: string) {
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
