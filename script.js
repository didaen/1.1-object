// Cara untuk membuat Object pada JavaScript
// 1. Object Literal
let mahasiswa = {
    //property
    nama: 'Sandhika',
    energi: 10,

    //method
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Selamat makan, ${this.nama}! Energimu sekarang menjadi ${this.energi}.`);
    }
}






// Function Declaration
// Constructor Function
// Object.created