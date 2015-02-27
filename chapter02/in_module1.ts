module A {
    export var a:string;
    var b: string;
}
module B {
    export var a: string;
}
A.a = "Hello!";
B.a = "World!";
console.log(A.a);
