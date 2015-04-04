interface X {
    myfunc1: { (x: number, y: string): string }; // メソッドシグネチャ
    myfunc2: (x: number, y: string) => string; // 関数型リテラル
    myfunc3(x: number, y: string): string; // オブジェクト型リテラル
}
class A implements X {
    myfunc1: { (x: number, y: string): string };
    myfunc2: { (x: number, y: string): string };
    myfunc3: { (x: number, y: string): string };
}
var a:X = new A();
a.myfunc1 = function (x: number, y: string): string {
    return x + y + " ";
}
a.myfunc2 = a.myfunc1;
a.myfunc3 = a.myfunc1;
console.log(a.myfunc1(1, "little") + a.myfunc1(2, "little") + a.myfunc1(3, "little") + "indian");
