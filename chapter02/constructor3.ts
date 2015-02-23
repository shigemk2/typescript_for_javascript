// 引数で初期化する
class A {
    public message: string;
    constructor(m: string) {
        this.message = m;
    }
}
var a = new A("Hello!");
console.log(a.message);
// var b = new A();
// console.log(b.message); // error
