class A {
    name = "Hello!";
}
var a = new A();
console.log(a.name);
console.log(a["name"]);
var nameOfName = "name";
console.log(a[nameOfName]);
