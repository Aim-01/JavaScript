// for ( let i = 0; i <= 10; i++ ){
//     let res = 2** i

//     console.log(res)
// }

//////////////////////////////////////////

//  chI = function(b){
    
// for ( let i = 0; i <= b; i++ ){
    
//     let res = 2** i
   
//     console.log(res)
// }
// }
// chI(10)

//////////////////////////////////////////

// let stroka = ""
// let content_stroki = ":)"

// for (i = 1; i <= 5; i++){

//    stroka = stroka+ content_stroki
   
//     console.log(stroka)
// }

///////////////////////////////////////
// let string = ""
// function printSmile(stroka1, numberOfRows) {

// for (i = 1; i <= numberOfRows; i++){
// string = string+stroka1
// console.log(string)
// }
// }

// printSmile(":]", 6)

/////////////////////////////////////////

// function getWordStructure(word){
// let countSog = 0
// let countGla = 0

// let gl = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'y', 'Y']

// let sogl = ['b', 'c', 'd', 'f', 'g', 'h', 'q', 'j', 'k', 'l', 'm', 'n', 
// 'p', 'r', 's', 't', 'v', 'w', 'x', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'Q', 
// 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']

// // // let splWrd = word.split("")   // разбили слово на массив букв
// // console.log(splWrd)
// for (i = 0; i < word.split("").length; i++){
// //   console.log(i + word.split(""))  // повторяет цикл 4 раза
//        for(j = 0; j < gl.length; j++){
//             // console.log(j + word.split(""))  // повторяем цикл по количеству гласных (12)
//           if( gl[j] !== word.split("")[i]){
//             // console.log(i + j +" Нет совпадений с массивом гласных")
//           }
//           else {   
//            countGla += 1
//             // console.log("Совпадение с массивом гласных" + countGla )
//                 break         
// }

// }
//         for (k =0; k < sogl.length; k++ ){
//             // console.log(k + word.split(""))   // повторяет цикл 40 раз
//                 if(sogl[k] !== word.split("")[i] ){
//                     // console.log(i + k +" Нет совпадений с массивом СОГЛАСНЫХ")
//                 }
//                 else{
//                     countSog +=1
//                     // console.log("Совпадение с массивом СОГЛАСНЫХ" + countSog)
//                     break
//                 }
//         }
// }
// console.log("Слово " + word + " сщстоит из " + countGla + " гласных" + " и " + countSog + " согласных.")
// }
// getWordStructure("Word")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getWordStructure1(word1){
//     let countSog1 = 0
//     let countGla1 = 0
    
//     let gl1 = "aeiouy"
//     let sogl1 = "bcdfghqjklmnprstvwxz"
    
//     for (i = 0; i < word1.toLowerCase().split("").length; i++){   // повторяет цикл 4 раза
//            for(j = 0; j < gl1.split("").length; j++){   // повторяем цикл по количеству гласных (12*4)
        
//               if( gl1.split("")[j] !== word1.toLowerCase().split("")[i]){  // если нет совпадений с массивом гласных
//               }
//               else {   
//                countGla1 += 1  // если есть совпадение с массивом гласных, прибавляем 1 в счёт гласных
//                     break     // прерываем цикл если было совпадение    
//     } 
//     }
//             for (k =0; k < sogl1.split("").length; k++ ){   // повторяет цикл 40 раз
//                     if(sogl1.split("")[k] !== word1.toLowerCase().split("")[i] ){   // если нет совпадений с массивом согласных
//                     }
//                     else{
//                         countSog1 +=1  // если есть совпадение с массивом согласных, прибавляем 1 в счёт согласных
//                         break    // прерываем цикл если было совпадение  
//                     }
//             }
//     }
//     console.log("Слово " + word1 + " сщстоит из " + countGla1 + " гласных" + " и " + countSog1 + " согласных.")
//     }
//     getWordStructure1("case")
//     getWordStructure1("Case")
//     getWordStructure1("Check-list")

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function isPalindrom(word2){
if(
    word2.toLowerCase().split("").reverse().join("") == word2.toLowerCase() ){   // развернуть reverse массив с конца и склеить join
        // console.log(word2.toLowerCase().split("").reverse())
    console.log("Word " + word2 +" is palindrome")
}
else{
    console.log("Word " + word2 +" is not palindrome")
}

}
isPalindrom("abba")
isPalindrom("Abba")
isPalindrom("Randome")