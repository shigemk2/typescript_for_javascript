interface InterfaceTypeA {
    getX(): string;
}
interface InterfaceTypeB {
    getX(): string;
}
class X implements InterfaceTypeA, InterfaceTypeB {
    getX():string {
        return "X";
    }
}
var a = new X();
console.log(a.getX());
