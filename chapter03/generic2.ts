class Store<T> {
    public x : T;
}
var a = new Store<number>();
a.x = 68000;
var b = new Store<string>();
b.x = "X";
console.log(b.x + a.x);
