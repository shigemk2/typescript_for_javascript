class x {
    y: number
    constructor() {
        this.y = 123;
    }
}
var z: new () => x;
z = x;
var a = new z();
console.log(a.y.toString());
