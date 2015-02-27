class A {
    private message: string;
    // accessor.ts(3,9): error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
    // tsc -t ES5でやらないとコンパイルエラーになる
    set sample(str: string) { this.message = str; }
    get sample(): string { return this.message; }
}
var b = new A();
console.log(b.sample);
b.sample = "two accessor";
console.log(b.sample);
