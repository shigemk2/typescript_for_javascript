interface X {
    [index: string]: string;
};
class Y implements X {
    [index: string]: string;
}
var b = new Y();
b["key1"] = "value1";
b["key2"] = "value2";
console.log(b["key2"]);
