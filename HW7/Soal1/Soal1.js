const rumus = require('./Rumus');

let P = 2
let L = 3

let S = 10

console.log("Persegi Panjang (Panjang dan lebar)  "+ P +" dan "+ + L  + "")
console.log("luasPersegiPanjang "+ rumus.luasPersegiPanjang(P,L) + "")
console.log("kelilingPersegiPanjang " + rumus.kelilingPersegiPanjang(P,L) + "")
console.log(" ")
console.log("Persegi (Sisi)  "+ S + "")
console.log("luasPersegi " + rumus.luasPersegi(S))
console.log("kelilingPersegi " +rumus.kelilingPersegi(S))
