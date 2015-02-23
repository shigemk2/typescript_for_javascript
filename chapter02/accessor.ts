class A {
    private message: string;
    set sample(str: string) { this.message = str; }
    get sample(): string { return this.message; }
}
var b = new A();
console.log(b.sample);
b.sample = "two accessor";
console.log(b.sample);
