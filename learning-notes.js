// === exakt lika
// == lika men kan ha "100" eller 100 (Stora och små bokstävr?)
// <= (sum <= 20) summan är  samma som 20 eller mindre


// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   // faslse

// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11
// 2. Create a variable, sum, and set it to the sum of the two cards


// let firstCard = 21;
// let secondCard = 0;
// let sum = firstCard + secondCard;


// if (sum < 21) {
//     console.log("Do you want to draw a new card?🙂")
// } else if (sum === 21) {
//     console.log("Wohoo!🎉 You've got Blackjack!🥳")
// } else {
//     console.log("Crap! You're out of the game!😭")
// }



// if (sum <= 20) {
//     console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
// }
// else { console.log("You're out of the game! 😭") }


// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard
// let hasBlackJack = false
// 1. Create a variable called isAlive and assign it to true
// let isAlive = true

// 2. Flip its value to false in the appropriate code block
// if (sum <= 20) {
//     console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🥳")
//     hasBlackJack = true
// } else {
//     console.log("You're out of the game! 😭")
//     isAlive = false
// }

// // 3. Log it out to check that you're doing it right
// console.log(isAlive)



// =====================ARRAY! ARRAY! ARRAY! ARRAY!========================


//========Push====================

// Push the newMessage to the messages array, and then log out the array
/*let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
messages.push(newMessage)
console.log(messages)


function newCard() {
    let card = 6
    sum += card
            // Push the card to the cards array
    cards.push(card)
    console.log(cards)
    renderGame()
}

*/


// =======Pop() Radera=======array============
// How can you remove the last item in an array? Try to google it!
/*messages.pop()
console.log(messages)*/

//================ end pusch &pop ==============//


// ====START ==> COUNTING IN JAVASCRIPT - FOR LOOPS - ========//





//*START= börjar räkna på 1, FINISH= under 11 alltså 10  STEP SIZE = (hur många siffror i taget, 2 4 6...)

/* for (let count = 1; count < 11; count += 2) {
    console.log(count)
} */


// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i])
// }

//!=======ARRAY FOR LOOP=======//

// let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
// let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
//* += för att spara hela värdet med bara  = kommer det bara stå "per"
// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i]
// }



// ^=======Returning values in function======'

// let player1Time = 102
// let player2Time = 107


// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// function getTotalRaceTime() {
//     return player1Time + player2Time
// }

// let totalTime = getTotalRaceTime()

// console.log(totalTime)

//^ ====================Math.random()=====

//*===============Math.random()===========

// function rollDice() {
//     let randomNumber = Math.floor( Math.random() * 6 ) + 1
//     return randomNumber
// }



//* || = eller
//* && = och / OR
//* === exakt lika dana

//! || the logicak OR opertor ||
// let likesDocumentaries = true
// let likesStartups = false

// if (likesDocumentaries === true || likesStartups === true) {
//     recommendMovie()
// }
// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }
/////////////////////////////////
//! Objects
//~ - store data in-depth - composite / complex data type
//~ key-value pairs

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }
// console.log(course.length)
////////////////////////////////////////////////////////








//ctrl + d /ddd
/*
! OPS
& hello
? what?
*hi
^ wii
~ omg!
TODO
*/

// & Windows: Shift + Alt + A

