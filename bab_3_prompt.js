//Belajar HTML Bersama
//BAB 3: Prompt
 /*GA PENTING */
    const myButton2 = document.getElementById('myButton2');
    myButton2.onclick = function() {
/*GA PENTING*/
        let jawaban = prompt("KONT___KAN Jawab yang benar!").toLowerCase(); //Memunculkan popup seperti alert(),tapi ada input keyboard
        //Kalau hanya prompt saja tidak terjadi apa apa
        if (jawaban === "kontrakan") {
            alert("benar bro!")
        } else {
            alert("alahhh...salah bre!")
        }
        
    };
