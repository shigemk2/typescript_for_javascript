module TooLongName {
    export var a = "Hello";
}
// 別モジュールへのアクセス
module AnotherModule {
    export function f() { console.log(TooLongName.a); };
}
AnotherModule.f();

// 別モジュールへのアクセス2
module AnotherModule2 {
    import s = TooLongName;
    export function f() { console.log(s.a); };
}
AnotherModule2.f();

// 別モジュールへのアクセス3
module AnotherModule3 {
    import s = TooLongName.a;
    export function f() { console.log(s); };
}
AnotherModule3.f();
