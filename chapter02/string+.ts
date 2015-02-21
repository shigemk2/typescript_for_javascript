var c = 123 + "";
console.log(c); // 123
// ただし、これは何でも文字列化できるという機能ではない。
class x {
    constructor(public a: number) {
    }
}
var a = new x(123);
var b = a + "";
console.log(b); // [object Object]
