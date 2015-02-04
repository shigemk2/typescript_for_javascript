var a: any;
a = 100;
console.log($.trim(a)); // この例はコンパイルが通る
console.log($.trim(100)); // この例はコンパイルが通らない
// trim(str: string): string;のように定義されているから。

