module TooLongName {
    export var a = "Hello";
};
module AnotherModule {
    export import s = TooLongName.a;
    var dummy = "It's a dummy";
};
console.log(AnotherModule.s);
