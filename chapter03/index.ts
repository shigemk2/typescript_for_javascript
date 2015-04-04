interface X {
    [index: number]: string;
};
class Y implements X {
    [index: number]: string;
}
var b: Y;
b = ['1st item', '2nd item'];
console.log(b[1]);
