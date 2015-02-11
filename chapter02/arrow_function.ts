var standard = function (x: number, y: number):number {
    return x + y;
}
console.log(standard(1, 2).toString());

var arrow = (x: number, y: number): number => {
    return x + y;
}
console.log(arrow(1, 2).toString());

var arrow2 = (x: number, y: number): number => x + y;
console.log(arrow2(1, 2).toString());
