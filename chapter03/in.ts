class X {
public a: string;
}
var x = new X();
alert("a" in x);
x.a = "Hello1";
alert("a" in x);
