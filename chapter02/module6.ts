module A {
    class X {
        public a: string;
    }
    export function Y(b: X) {
        console.log(b.a)
    }
    export function Z() {
        Y({ a: "Hello!" });
    }
};
// 型チェックが入る
// A.Y({ a:11}); // compile error
A.Y({ a:"World!"});
A.Z();
