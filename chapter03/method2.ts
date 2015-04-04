interface X {
    myfunc1: {
        (x: number): string;
        (y: string): string
    };
}
class A implements X {
    myfunc1: {
        (x: number): string;
        (y: string): string
    };
}
var a:X = new A();
a.myfunc1 = function (x: any): string {
    return x + " ";
}
console.log(a.myfunc1("Lucky") + a.myfunc1(7));
