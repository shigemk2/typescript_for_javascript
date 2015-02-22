class X {
    public a: number;
    public static a: number;
}
X.a = 123;
var x = new X();
x.a = 456;
console.log(X.a.toString());
console.log(x.a.toString());
