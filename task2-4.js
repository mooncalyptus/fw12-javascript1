        let teks = "kakak";
        let len = "";
        for(let i = 0; i < teks.length;i++){
            len  = teks[i] + len;
            
        }
        if(teks.length <=2){
            console.log("Nilai harus lebih dari dua");
        } else if( teks !== len){
            console.log("Bukan palindrome");
        } else{
            console.log("Palindrome")
        }