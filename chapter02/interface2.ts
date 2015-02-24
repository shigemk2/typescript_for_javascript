interface InterfaceTypeA {
    getX(): string;
}
interface InterfaceTypeB {
    getY(): string;
}

class X implements InterfaceTypeA, InterfaceTypeB {
    getX():string {
        return "X";
    }
    getY(): string {
        return "Y";
    }
}
var a = new X();
console.log(a.getX());
console.log(a.getY());
