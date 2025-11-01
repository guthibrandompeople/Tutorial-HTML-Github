//Belajar HTML Bersama
//BAB 0: Variable Assignment 
/* GA PENTING */
const myButton0 = document.getElementById('myButton0');
    myButton0.onclick = function() {
/* GA PENTING*/
        var berhasil = "Berhasil!" //Bisa ditetapkan ulanh,Kurang direkomendasikan untuk JavaScript modern
         // const Angka = 443 // Sesuai dengan namanya "const", , berarti itu konstan,tidak bisa ditetapkan ulang.
        let Angka= "443, " //Variabel yang bisa ditetapkan ulang
        
        /* GA PENTING,CONTOH*/
        alert("Status: " + Angka + berhasil)
        /* GA PENTING,CONTOH*/
    };