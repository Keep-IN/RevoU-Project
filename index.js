var weight = document.getElementById("berat-badan")
var age = document.getElementById("usia-tahun")
var height = document.getElementById("tinggi-badan")
var male = document.getElementById('pria')
var female = document.getElementById('perempuan')
var resultNumber = document.getElementById('resultNum')
var resultDescrip = document.getElementById('resultDesc')
let btn = document.getElementById('cekhasil')

// Mengecek Input Field Apakah Sudah Terisi atau Belum
function calculate(){
    resultNumber.innerHTML = "Function Error"
    resultDescrip.innerHTML = "Function untuk mengecek hasil masih belum bisa berjalan dengan baik"
    if(weight.value=='' || height.value=='' || age.value=='' || (male.checked==false && female.checked==false)){ 
    alert('Harap isi semua kolom untuk mengecek hasil BMI')
    } else {
        cekHasil();
    }
}

// Menghitung Nilai BMI
function cekHasil(){
    var arr = [weight.value, height.value, age.value]
    if(male.checked==true){
        arr.push("Laki-Laki")
    } else if(female.checked==true){
        arr.push("Perempuan")
    }
    var bmi = Number(arr[0])/((Number(arr[1])/100)*(Number(arr[1])/100))
    resultNumber.innerHTML = bmi

    if(bmi < 18.5){
        // Apabila  Nilai BMI < 18.5
        resultDescrip.innerHTML = "Kekurangan Berat Badan"
    } else if(bmi >= 18.5 && bmi <= 24.9){
        // Apabila Nilai BMI >= 18.5 dan BMI <= 24.9
        resultDescrip.innerHTML = "Normal (Ideal)"
    } else if(bmi >= 25 && bmi <= 29.9){
        // Apabila Nilai BMI >= 25 dan BMI <= 29.9
        resultDescrip.innerHTML = "Kelebihan Berat Badan"
    } else if (bmi >= 30){
        // Apabila Nilai BMI >= 30
        resultDescrip.innerHTML = "Kegemukan (Obesitas)"
    }
}
