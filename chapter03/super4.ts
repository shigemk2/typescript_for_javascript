interface X {
    myfunc(x: number, y: number);
}
class Y implements X {
    public myfunc(a: number) {
        console.log(a);
    }
}
var y:X = new Y();
y.myfunc(123,456);
