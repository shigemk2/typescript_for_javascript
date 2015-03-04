interface X {
    name: string;
}
class A implements X{
    public name: string;
}
var a = new A();
a.name = "Hello!"
console.log(a.name);
