
function luasSegitiga(alas,tinggi) {
    return(
        0.5*alas*tinggi
    )
}

function kelilingSegitiga(sisiA,sisiB,sisiC){
    return(
        sisiA+sisiB+sisiC
    )
}

function luasPersegi(S){
    return(
        S*S
    )
}

function kelilingPersegi(S){
    return(
        4*S
    )
}

function luasPersegiPanjang(P,L){
    return P*L
}

function kelilingPersegiPanjang(P,L){
    return(
        2*(P+L)
    )
}

module.exports = {luasPersegi, luasSegitiga, luasPersegiPanjang, kelilingPersegi, kelilingPersegiPanjang, kelilingSegitiga};