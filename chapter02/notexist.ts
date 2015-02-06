var d: any;
d = new Date();
// notexistなるメンバーはDate型に存在しない
console.log(d.notexist);

var date: Date;
date = new Date();
console.log(date.notexist); // コンパイルエラー

var obj = {};
console.log(obj.notExist); // コンパイルエラー

var a:number;
console.log(a); // undefined
