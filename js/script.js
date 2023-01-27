let carNum = "8600124567891021"


 function getCardNum(num){

         if (num && num.length == 16 && !isNaN(num)){
             console.log(`${num.slice(0, 4)} **** **** ${num.slice(12)}`)
        }else{
            console.log(`Karta raqami xato kiritildi...`)
        }
        
        
    
 }

 getCardNum(cardNum)