class A {
    static a: number = A.b + A.c;
    static b: number = 1;
    static c: number = 2;
    static d: number = A.b + A.c; // 3
}
console.log(A.a); // NaN
console.log(A.a.toString()); // NaN
console.log(A.d); // 3
