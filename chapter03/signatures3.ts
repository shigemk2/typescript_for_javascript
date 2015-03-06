interface MyTypeInterface {
    myString: string;
}
interface MyConstructInterface {
    new (n: string): MyTypeInterface;
}
class MyClass implements MyTypeInterface {
    constructor(public myString: string) {
    }
}

function makeObject(constrectInterface: MyConstructInterface) {
    return new constrectInterface('hello!');
}
console.log(new MyClass("hello").myString);
console.log(makeObject(MyClass).myString);
