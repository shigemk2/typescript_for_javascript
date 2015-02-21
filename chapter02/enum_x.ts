enum e {
    a, b
}
var x: e;
x = e.a;
console.log(x); // 0
x++;
var y = x++;
console.log(x); // 2
console.log(typeof x); // number
console.log(y); // 1
console.log(typeof y); // number
