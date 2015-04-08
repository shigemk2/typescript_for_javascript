class X {
    public f1() {
        console.log("I'm X");
    }
}
class Y extends X {
    public f2() {
        console.log("I'm Y");
    }
}
class Z{
    public f3<T extends X>(t:T) {
        t.f1();
    }
}
var a = new Z();
a.f3<Y>(new Y());
