let NilaiDicari
NilaiDicari = Math.floor(Math.random() * 10) + 1;

while(true){
    let nilai = Math.floor(Math.random() * 10) + 1;
    console.log("dicari nilai (" + NilaiDicari + ") Dengan nilai (" + nilai +" )")
    if (nilai == NilaiDicari) {
        console.log("Nilai yang dicari " + nilai)
        break
    }
}