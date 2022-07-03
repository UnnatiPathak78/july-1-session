// function checkPrime(num){
//     let tick_counter = 0;
//     for(let i = 1; i <= num; i = i+1){
//         if(num % i == 0){
//             tick_counter = tick_counter + 1;
//         }
//     }

// if(tick_counter == 2){
//     return true;
// }
// else{
//     return false;
// }
// }
// let abcd = checkPrime(14);
// console.log(abcd);




// function is_odd_or_even(num1){
//     if(num1 % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let sum = 0;
// for( let i = 0; i <= 10; i = i + 1){
//     let is_number_even = is_odd_or_even(i);
//     if(is_number_even == true){
//         sum = sum + i;
//     }
// }
// console.log(sum);



// let num1 = 10;
// let num2 = 15;
// function print_something(){
//     let sum = num1 + num2;
// //    alert(sum);
//     let abcd = prompt();
//     console.log(typeof abcd);

// }

// function printing_name(){
//     let name = prompt();
//     console.log(name);
//     let countletter = 0;
//     for( let i = 0; i <= name.length; i = i + 1){
//        // single_character = name[i];
//         switch(name[i]){
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 countletter = countletter + 1;
//         break;
            
//         }
//     }
//     console.log(countletter);
// }





// function two_sum(){
//     let num1 = prompt();
//     let num2 = prompt();
//     num1 = parseInt(num1);
//     num2 = parseInt(num2);
//     let sum = num1 + num2;
//     alert(sum);
// }



function FizzBuzz(){
    let num = prompt();
    num = parseInt(num);
    if(num % 3 == 0 && num % 5 == 0){
        alert("FiZZBUZZ");
    }
    else if(num % 3 == 0){
        alert ("FiZZ");
    }
    else if(num % 5 == 0){
        alert ("Buzz");
    }
    else{
        alert(num);
    }
}
