//Belajar HTML Bersama
//BAB 2: Penggunaan If Else dan Switch Case
 /*GA PENTING */
    const myButton1 = document.getElementById('myButton1');
    myButton1.onclick = function() {
/*GA PENTING*/
        let nama = "Alka" //Let bisa untuk menyimpan kata atau sesuatu. Kalau kosong diisi dengan undefined.
        let pacar = null //null = ga ada
            usia = 10;
            let kategoriUsia;
            
            
        if (pacar == null) {
            //seperti Jika dalam bahasa Indonesia
            pacar = "ga punya pacar"; //If itu seperti if "pacar=null" if nya "ga punya",munculnya ga punya.

        } else {
            // Else itu kebalikanya if,seperti "if "pacar=null" pacar = ga ada,else "pacar=punya" 
            pacar = "punya pacar"
        }


switch (true) {
    case usia >= 0 && usia <= 5:
        kategoriUsia = "Balita (Bawah Lima Tahun)";
        break; //Jika usia = 3 berarti balita
    case usia > 5 && usia <= 12:
        kategoriUsia = "Anak-anak";
        break; 
    case usia > 12 && usia <= 19:
        kategoriUsia = "Remaja";
        break;
    case usia > 19 && usia <= 35:
        kategoriUsia = "Dewasa Muda";
        break;
    case usia > 35 && usia <= 60:
        kategoriUsia = "Dewasa Paruh Baya";
        break;
    case usia > 60:
        kategoriUsia = "Lansia (Lanjut Usia)";
        break;
    default:
        kategoriUsia = "Usia tidak valid";
}



        
        
        alert("Halo!") // Munculkan GUI Teks
        alert("Namaku " + nama)
        alert("Aku " + pacar)
        alert("Umurku " + usia)
        alert("Saya kehitung sebagai seorang " + kategoriUsia);
    };


//If Else adalah kode di JavaScript yang seperti kayak gini kalau di bahasa indonesia: "Jika pacar = ga ada, pacar = ga punya".Jadi kayak If = Jika Else = Kalau tidak sesuai dengan parameter yang ada di If.
// Switch Case sama seperti If Else,tetapi tidak terlalu ribet dan cara menggunakanya beda.