class A {
    constructor(public a: string) {                     
    }                       
}                   
class B {                  
    constructor(public a:string) {
    }                
}               
var x: A = new B("Hello");                
console.log(x.a);             
