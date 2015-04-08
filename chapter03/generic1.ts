class NumberStore {
    public x : number;
}
class StringStore {
    public x: string;
}
var a = new NumberStore();
a.x = 68000;
var b = new StringStore();
b.x = "X";
console.log(b.x + a.x);
