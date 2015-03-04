interface X {
    123: string;
}
class A implements X{
    public 123: string;
}
var a = new A();
a[123] = "Hello!"
console.log(a[123]);
