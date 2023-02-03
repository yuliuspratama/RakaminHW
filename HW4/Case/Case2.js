let Array_list =[]
let Kendarran_list=["motor" , "mobil"]
let plat_list =["kuning","putih"]

for (let i = 0 ; 10 >i ; i++ ){
    let CC = Math.floor(Math.random() * 4000) + 1
    Array_list.push([Kendarran_list[Math.floor(Math.random() * 2)],
    plat_list[Math.floor(Math.random() * 2)],CC])
}
for (let i = 0 ; 10 >i ; i++ ){
    console.log(Array_list[i])
}




