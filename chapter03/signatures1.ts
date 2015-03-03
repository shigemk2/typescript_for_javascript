interface Y {
    x(p: "typea"): number;
    x(p: "typeb"): string;
    x(p: string): any;}
class Z implements Y {
    x(p: string): any {
        if (p == "typea") return 123;
        if (p == "typeb") return "Hello";
        return null;
    }
}
var a:Z = new Z();
var b = a.x("typea");
console.log(b.toString());
var c = a.x("typeb");
console.log(c);
var d = a.x("typec");
console.log(d);
