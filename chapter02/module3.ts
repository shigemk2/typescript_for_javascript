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
