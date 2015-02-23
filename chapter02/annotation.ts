class A {
    static a: number = A.b + A.c;
    static b: number = 1;
    static c: number = 2;
}
console.log(A.a); // NaN
console.log(A.a.toString()); // NaN
