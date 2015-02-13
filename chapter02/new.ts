class z {
    constructor(public arg: string) {
    }
}
var anyz: any = z;
var x = new z("123");
var y = new anyz("456","789");
console.log(x.arg);
console.log(y.arg);
