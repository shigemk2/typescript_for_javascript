var a = {
    name: "Hello!",
    func: function () {
        console.log(this.name);
    }
}
a.func();

var b = {
    name: "World!",
    func: a.func
}
b.func();
