// オーバーライドはpublicなメンバーのみに許される
class A {
    private x: number = 3;
    public y: number = 5;
}
class B extends A {
    private x: number = 4;
}
var b = new A();
console.log(b.y);
