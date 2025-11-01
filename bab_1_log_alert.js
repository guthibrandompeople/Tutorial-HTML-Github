//Belajar HTML Bersama
//BAB 1:Let,Alert dan Log
 /*GA PENTING */
    const myButton = document.getElementById('myButton');
    myButton.onclick = function() {
/*GA PENTING*/
        console.log("Mission Accomplished:Tombol Console Log");
        console.log("Hello World"); //Munculkan teks hanya di konsol
        
        let nama = "Alka" //Let bisa untuk menyimpan kata atau sesuatu. Kalau kosong diisi dengan undefined.
        alert("Halo!") // Munculkan GUI Teks
        alert("Namaku " + nama);
    };