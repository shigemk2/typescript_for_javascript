interface X {
    f(x: number): string;
}
class A implements X {
    public f(x: number): string {
        return "Your number is "+x.toString();
    }
}
var a = new A();
console.log(a.f(7));
