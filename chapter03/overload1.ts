// このメソッドaは、実際には引数をany型として呼び出すことはできない。any型を受け入れるのはあくまで実装の都合である。つまり、string型とnumber型しか渡すことができない。
class A {
    a(x: string);
    a(x: number);
    a(x: any) {
        if (typeof (x) == 'string') {
            console.log(x);
        }
        else {
            console.log('number' + x);
        }
    }
}
var a = new A();
a.a(123);
a.a("Hello!");
