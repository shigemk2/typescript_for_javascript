interface X {
}
class Y implements X {
}
var a = new Y();
if( a instanceof Y) console.log("a is instance of Y");
// これは無理
// if( a instanceof X) console.log("a is instance of X");
