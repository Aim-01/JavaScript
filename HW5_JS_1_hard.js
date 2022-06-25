// const checkAge = function (age){

// let age_2 = 18
// let age_3 = 60

// if(age < age_2){
// console.log("You don’t have access cause your age is " + age + " It’s less then " + age_2)
// }
//     else if(age >= age_2 && age < age_3){
// console.log("Welcome  !")
// }
//     else if(age > age_3){
// console.log("Keep calm and look Culture channel")
// }
// else{
//     console.log("Technical work")
// }
// }
// checkAge(17)
// checkAge(18)
// checkAge(61)
// checkAge("-")

/////////////////////////////////////////////////////////////////////////

// const checkAge2 = function (age){

//     let age_2 = 18
//     let age_3 = 60
    
//     if(typeof(age) !== "number" ){      // typeof() всегда возвращает строку (string) тип данных
//         console.log("Error: Entered not a number")
//     }
//         else if(age < age_2){
//             console.log("You don’t have access cause your age is " + age + " It’s less then " + age_2)
//         }
//         else if(age >= age_2 && age < age_3){
//     console.log("Welcome  !")
//     }
//         else if(age > age_3){
//     console.log("Keep calm and look Culture channel")
//     }
//     else{
//         console.log("Technical work")
//     }
//     }
//     checkAge2(17)
//     checkAge2(18)
//     checkAge2(61)
//     checkAge2("-")

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const checkAge3 = function (age){

//     let age_2 = 18
//     let age_3 = 60
    
//     if(typeof(age) !== "number" ){      // typeof() всегда возвращает строку (string) тип данных
//         console.log("Entered not a number")

//         if(Number(age) < age_2){
//             console.log("You don’t have access cause your age is " + age + " It’s less then " + age_2)
//         }
//         else if(Number(age) >= age_2 && Number(age) < age_3){
//     console.log("Welcome  !")
//     }
//         else if(Number(age) > age_3){
//     console.log("Keep calm and look Culture channel")
//     }
//     else {
//         console.log("Technical work")
//     }
       
// }
// }
  
//     checkAge3("5")
//     checkAge3("20")
//     checkAge3("61")
//     checkAge3("-")

    ////////////////////////////////////////////////////////////////////////////////////////////////////////
  
   
    const ageCh = prompt("How old are you?");
    let age_2 = 18;
    let age_3 = 60;
      let age = ageCh;
        
        
        if(typeof(age) !== "number" ){     // возвращает тип данных string
            console.log("Entered not a number")
    
            if(Number(age) < age_2){
                console.log("You don’t have access cause your age is " + age + " It’s less then " + age_2)
            }
            else if(Number(age) >= age_2 && Number(age) < age_3){
        console.log("Welcome  !")
        }
            else if(Number(age) > age_3){
        console.log("Keep calm and look Culture channel")
        }
        else {
            console.log("Technical work")
        }
    }
    
       