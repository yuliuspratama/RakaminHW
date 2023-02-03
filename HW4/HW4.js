let angka_acak =[]
let array_genap =[]
let array_ganjil =[]

//inisialisasi nilai random
for (let i=0;i<=99;i++){
    angka_acak[i]= Math.floor(Math.random() * 50) + 1;
}

//pembagian index Genap dan Ganjil
for (angka in angka_acak){
    if((angka % 2) == 0){
    array_genap.push(angka_acak[angka])
    } else{
        array_ganjil.push(angka_acak[angka])
    }
}

function NilaiMinArray(Number){
    let Nilai = Number[0]
    for (let i = 0;i <= Number.length ;i++){
        if(Nilai > Number[i] ){
            Nilai = Number[i]
        }
    }
    return(Nilai)
}

function NilaiMaxArray(Number){
    let Nilai = Number[0]
    for (let i = 0;i <= Number.length ;i++){
        if(Nilai < Number[i] ){
            Nilai = Number[i]
        }
    }
    return(Nilai)
}

function NilaiRataRataArray(Number){
    let Nilai = 0
    for (let i = 0;i <= Number.length -1 ;i++){
        Nilai = Nilai + Number[i]
    }
    
    Nilai = Nilai / Number.length
    return(Nilai)
}

function NilaiTotalArray(Number){
    let Nilai = 0
    for (let i = 0;i <= Number.length -1 ;i++){
        Nilai = Nilai + Number[i]
    }
    return(Nilai)
}

function Banding(Number1 , Number2 ){
    if (Number1 < Number2 ){
        return("Nilai kiri (" + Number1 + ") lebih kecil dari nilai ("+ Number2+")")
    } if (Number1 > Number2 ){
        return("Nilai kiri ("+Number1+") lebih besar dari nilai kanan ("+Number2+")")
    } else {
        return("Nilai kiri ("+Number1+") Sama dengan nilai kanan ("+Number2+")")
    }
}


console.log("Jumlah Array Acak : "+ angka_acak.length)
console.log("Jumlah Array Genap :" + array_genap.length)
console.log("Jumlah Array Ganjil :" + array_ganjil.length)
console.log()
console.log("Array Acak List")
console.log("Min :" + NilaiMinArray(angka_acak))
console.log("Max :" +NilaiMaxArray(angka_acak))
console.log("Total :"+ NilaiTotalArray(angka_acak))
console.log("Rata-Rata :" +NilaiRataRataArray(angka_acak))
console.log()
console.log("Array Genap List")
console.log("Min :" + NilaiMinArray(array_ganjil))
console.log("Max :" +NilaiMaxArray(array_genap))
console.log("Total :"+ NilaiTotalArray(array_genap))
console.log("Rata-Rata :" +NilaiRataRataArray(array_genap))
console.log()
console.log("Array Ganjil List")
console.log("Min :" + NilaiMinArray(array_ganjil))
console.log("Max :" +NilaiMaxArray(array_ganjil))
console.log("Total :"+ NilaiTotalArray(array_ganjil))
console.log("Rata-Rata :" +NilaiRataRataArray(array_ganjil))
console.log()
console.log("Perbandingan Genap (Kiri) dan Ganjil (Kanan)")
console.log("Min :" + Banding(NilaiMinArray(array_genap),NilaiMinArray(array_ganjil)))
console.log("Max :" + Banding(NilaiMaxArray(array_genap),NilaiMaxArray(array_ganjil)))
console.log("Total :"+ Banding(NilaiTotalArray(array_genap),NilaiTotalArray(array_ganjil)))
console.log("Rata-Rata :"+Banding(NilaiRataRataArray(array_genap),NilaiRataRataArray(array_ganjil)))