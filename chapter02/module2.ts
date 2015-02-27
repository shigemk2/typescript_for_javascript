// どちらも機能的には同じ
module A.B {
    export function f() { console.log("I'm f."); };
}
A.B.f();

module C {
    export module D {
        export function f() { console.log("I'm f.");};
    }
}
C.D.f();
