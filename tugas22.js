var kalimat = "Saya ingin belajar bersama"
var splitKata = kalimat.split(" ")

function pisah(kata, index){
	console.log("Item : ", kata, "Indeks ke  ", index)	
}

splitKata.forEach(pisah)