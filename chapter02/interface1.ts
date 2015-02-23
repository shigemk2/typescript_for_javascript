interface Ship {
    GetLength(): number;
}
interface WarShip extends Ship {
    GetWeaponName(): string;
}

class Yamato implements WarShip {
    public GetLength(): number {
        return 263;
    }
    public GetWeaponName(): string {
        return "46cm cannon";
    }
}
// 実装したinterfaceの型が使える
var yamato: WarShip = new Yamato();
console.log("length of yamato is " +
            yamato.GetLength() +
            "m and main weapon is " +
            yamato.GetWeaponName());
