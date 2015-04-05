interface Y {
    x(p: "typea"): number;
    x(p: "typeb"): string;
    x(p: string): any;
}
class Z implements Y {
    x(p: string): any {
        if (p == "typea") return 123;
        if (p == "typeb") return "Hello";
        return null;
    }
}
interface X {
    x(p: string): any;
}
var a: X = new Z();
var b = a.x("typea");
console.log(b);
