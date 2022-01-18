// Cara untuk membuat Object pada JavaScript
// 1. Object Literal
let mahasiswa1 = {
    //property
    nama: 'Sandhika',
    energi: 10,

    //method
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Selamat makan, ${this.nama}! Energimu sekarang menjadi ${this.energi}.`);
    }
}

// Object literal namanya tidak boleh sama    
let mahasiswa2 = {
    //property
    nama: 'Edvin',
    energi: 30,

    //method
    makan: function (porsi) {
        this.energi = this.energi + porsi;
        console.log(`Selamat makan, ${this.nama}Energimu sekarang menjadi ${this.energi}.`);
    }
}


// Function Declaration
// Keuntungannya kalian tidak perlu membuat duplikat dari objectnya
// Nanti kalo mau bikin objectnya 2 atau 3 tinggan instansiasinya yang berulangkali

















// Constructor Function
// Object.created