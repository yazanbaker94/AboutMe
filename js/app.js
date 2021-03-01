'use strict';


let nameQ = prompt("What's Your Name?");
alert("Welcome back, " + nameQ);


alert("please only answer 'Yes', 'No', 'y' OR 'n'");
let firstQ = prompt("Are United States elections next year?");
let firstA = firstQ.toLocaleLowerCase();
console.log(firstA);

if(firstA === 'no' || firstA === 'n'){
    alert("Your answer is correct!")
} else {
    alert("Your answer is wrong. Good luck next time!")
}


let secondQ = prompt("Is the Jordanian Currency Dollars?");
let secondA = secondQ.toLocaleLowerCase();
console.log(secondA);

if(secondA === 'no' || secondA === 'n'){
    alert("Your answer is correct!")
} else {
    alert("Your answer is wrong. Good luck next time!")
}

let thirdQ = prompt("Is Iraq in Africa?");
let thirdA = thirdQ.toLocaleLowerCase();
console.log(thirdA);

if(thirdA === 'no' || thirdA === 'n'){
    alert("Your answer is correct!")
} else {
    alert("Your answer is wrong. Good luck next time!")
}

let fourthQ = prompt("Is Russia the biggest country in the world?");
let fourthA = fourthQ.toLocaleLowerCase();
console.log(fourthA);

if(fourthA === 'yes' || fourthA === 'y'){
    alert("Your answer is correct!")
} else {
    alert("Your answer is wrong. Good luck next time!")
}

let fifthQ = prompt("Is Lebanon in Asia?");
let fifthA = fifthQ.toLocaleLowerCase();
console.log(fifthA);

if(fifthA === 'yes' || fifthA === 'y'){
    alert("Your answer is correct!")
} else {
    alert("Your answer is wrong. Good luck next time, " + nameQ + " !");
}



