'use strict';


let nameQ = prompt("What's Your Name?");
alert("Welcome back, " + nameQ);

let counter = 0;

alert("please only answer 'Yes', 'No', 'y' OR 'n'");
let firstQ = prompt("Are United States elections next year?");
let firstA = firstQ.toLocaleLowerCase();
console.log(firstA);

if(firstA === 'no' || firstA === 'n'){
    alert("Your answer is correct!");
    counter++;
    console.log(counter);
} else {
    alert("Your answer is wrong. Good luck next time!")
}


let secondQ = prompt("Is the Jordanian Currency Dollars?");
let secondA = secondQ.toLocaleLowerCase();
console.log(secondA);

if(secondA === 'no' || secondA === 'n'){
    alert("Your answer is correct!")
    counter++;
    console.log(counter);
} else {
    alert("Your answer is wrong. Good luck next time!")
}

let thirdQ = prompt("Is Iraq in Africa?");
let thirdA = thirdQ.toLocaleLowerCase();
console.log(thirdA);

if(thirdA === 'no' || thirdA === 'n'){
    alert("Your answer is correct!")
    counter++;
    console.log(counter);
} else {
    alert("Your answer is wrong. Good luck next time!")
}

let fourthQ = prompt("Is Russia the biggest country in the world?");
let fourthA = fourthQ.toLocaleLowerCase();
console.log(fourthA);

if(fourthA === 'yes' || fourthA === 'y'){
    alert("Your answer is correct!");
    counter++;
    console.log(counter);
} else {
    alert("Your answer is wrong. Good luck next time!")
}

let fifthQ = prompt("Is Lebanon in Asia?");
let fifthA = fifthQ.toLocaleLowerCase();
console.log(fifthA);

if(fifthA === 'yes' || fifthA === 'y'){
    alert("Your answer is correct!");
    counter++;
    console.log(counter);
} else {
    alert("Your answer is wrong. Good luck next time, " + nameQ + " !");
}

let correctNumber = 87;
let parsedCorrecNumber = parseInt(correctNumber);
let userAttempt = 4;

// do {
//     let userGuess = prompt("Please enter a number between 50 and 100: ");
//     if(userGuess == parsedCorrecNumber){
//         alert("Correct answer");
//     } else if(userGuess!=parsedCorrecNumber) {
//         alert("wrong answer");
//     }
//     userAttempt-=1;
//   } while(userAttempt = 0 );


while(userAttempt){
    let userGuess = prompt("Please enter a number between 50 and 100: ");
    if(userGuess == parsedCorrecNumber) {
        alert("Correct!");
        counter++;
        console.log(counter);
        break;
    } else if(userGuess > parsedCorrecNumber){
        alert("Too high");

    } else if(userGuess < parsedCorrecNumber){
        alert("Too low");
    } 
    
    
    userAttempt-=1;

}

alert("correct answer is 87!");


let userAttempt2 = 6;
let correctAnswers = ["Irbid", "Amman", "Zarqa", "Mafraq"];
while(userAttempt2){
    let userQuestion= prompt("Write down 5 cities inside Jordan: ");
    if(correctAnswers[0] == userQuestion || correctAnswers[1] == userQuestion || correctAnswers[2] == userQuestion || correctAnswers[3] == userQuestion) {
        alert("Correct!");
        counter++;
        console.log(counter);
        break;
    } else {
        alert('please try again');
    }   
    
    userAttempt2-=1;

}




alert("You have scored " + counter + " out of 7");







