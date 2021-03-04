'use strict';

let counter = 0;
function newFunctionYes(){
    if(userInput === 'yes' || userInput === 'y')
        alert("Your answer is correct!");
        counter++;

}
function newFunctionNo(){
    if(userInput === 'no' || userInput === 'n'){
        alert("Your answer is correct!");
        counter++;
    } else {
        alert("Your answer is wrong. Good luck next time!")
    }
    

}


let nameQ = prompt("What's Your Name?");
alert("Welcome back, " + nameQ);


alert("please only answer 'Yes', 'No', 'y' OR 'n'");
let user = prompt("Are United States elections next year?");
let userInput = user.toLocaleLowerCase();

newFunctionNo();



 user = prompt("Is the Jordanian Currency Dollars?");
 userInput = user.toLocaleLowerCase();

newFunctionNo();


user = prompt("Is Iraq in Africa?");
 userInput = user.toLocaleLowerCase();

newFunctionNo();


 user = prompt("Is Russia the biggest country in the world?");
 userInput = user.toLocaleLowerCase();

newFunctionYes();


user = prompt("Is Lebanon in Asia?");
userInput = user.toLocaleLowerCase();

newFunctionYes();




let correctNumber = 87;
let parsedCorrecNumber = parseInt(correctNumber);
let userAttempt = 4;
function a(){
    while(userAttempt){
    
        
    let userGuess = prompt("Please enter a number between 50 and 100: ");
    if(userGuess == parsedCorrecNumber) {
        alert("Correct!");
        counter++;
        break;
    } else if(userGuess > parsedCorrecNumber){
        alert("Too high");

    } else if(userGuess < parsedCorrecNumber){
        alert("Too low");
    } 
    
    
    userAttempt-=1;  
}}




a();



alert("correct answer is 87!");
let userAttempt2 = 6;
let correctAnswers = ["Irbid", "Amman", "Zarqa", "Mafraq"];
function b(){
    while(userAttempt2){
        let userQuestion= prompt("Write down 5 cities inside Jordan: ");
        if(correctAnswers[0] == userQuestion || correctAnswers[1] == userQuestion || correctAnswers[2] == userQuestion || correctAnswers[3] == userQuestion) {
            alert("Correct!");
            counter++;
            break;
        } else {
            alert('please try again');
        }   
        
        userAttempt2-=1;
    
    }
    
    
}


b();

alert("You have scored " + counter + " out of 7");







