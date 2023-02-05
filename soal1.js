const prompt = require('prompt-sync')();
const angka = prompt('Masukkan Angka : ');

//cek bilangan negatif
if (angka < 0 ){
    console.log('Tidak bisa input bilangan negatif')
}

//cek bilangan genap
else if (angka % 2==0){
    var hasil = Math.sqrt(angka)
    console.log('akar pangkat 2 dari '+angka+' adalah '+hasil);
}

//cek bilangan ganjil
else {
    console.log('Tidak bisa input bilangan ganjil');
}