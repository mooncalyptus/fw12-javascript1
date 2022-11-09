//nomor 3
const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;
let output;
let grade;
    if(typeof mtk !== 'number' || typeof mtk === null){
        output = "Semua nilai harus terisi!";
    } else if(typeof bahasaIndonesia !== 'number' || typeof bahasaIndonesia === null){
        output = "Semua nilai harus terisi!";
    } else if(typeof bahasaInggris !== 'number' || typeof bahasaInggris === null){
        output = "Semua nilai harus terisi!";
    } else if(typeof ipa !== 'number' || typeof ipa === null){
        output = "Semua nilai harus terisi!";
    } else{
        output = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
    };
        if(output >= 90 || output == 100 && typeof output === number){
        grade = "A";
    } else if(output >= 80 || output <= 89 && typeof output === number){
        grade = "B";
    } else if(output >=70 || output <= 79 && typeof output === number){
        grade = "C";
    } else if(output >= 60 || output <= 69 && typeof output === number){
        grade = "D";
    } else if (output >= 0 || output <= 59 && typeof output === number) {
        grade = "E";
    }else{
        grade = "Tidak ada grade";
    }

    console.log("Rata - rata = " + output);
    console.log("Grade = " + grade);