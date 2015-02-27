module A {
    export class X {
        public a: string;
    }
    export function Y(b: X) {
        console.log(b.a)
    }
};
A.Y({a:"Hello!"});
