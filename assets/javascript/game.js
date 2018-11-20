window.onload = function() {

alert("5 Deadly Venoms.  Guess the letters.  Choose wisely.");

var guessesRemaining = 5;
var wrongGuesses = [];
var venoms = ["centipede", "snake", "scorpion", "lizard", "toad"];
var compVenom = venoms[Math.floor(Math.random() * venoms.length)];
var answerArray = [];

for (var i = 0; i < compVenom.length; i++) {
 answerArray[i] = "_";
}
console.log(answerArray.join(" "));
document.getElementById("ven").innerHTML = answerArray.join(" ");
document.getElementById("gr").innerHTML = guessesRemaining;


document.onkeyup = function(event) {
var userGuess = event.key;
console.log(userGuess)
document.getElementById("lg").innerHTML = userGuess;
document.getElementById("ven").innerHTML = answerArray.join(" ");
document.getElementById("wgs").innerHTML = wrongGuesses;
document.getElementById("gr").innerHTML = guessesRemaining;

if (guessesRemaining > 0 && answerArray.includes("_")){
    if (wrongGuesses.includes(userGuess)) {alert("Pick a different letter, bonehead")}
        else{
            if (compVenom.includes(userGuess) === false){
                guessesRemaining--;
                wrongGuesses.push(userGuess);
                console.log(compVenom);
                console.log(userGuess);
                console.log(guessesRemaining);
                console.log(wrongGuesses);
                document.getElementById("lg").innerHTML = userGuess;
                document.getElementById("ven").innerHTML = answerArray.join(" ");
                document.getElementById("wgs").innerHTML = wrongGuesses;
                document.getElementById("gr").innerHTML = guessesRemaining;

            }
            else {
                for (var i=0; i<compVenom.length; i++) {
                    if (compVenom[i] === userGuess) {
                        answerArray[i] = userGuess;
                        console.log(compVenom);
                        console.log(userGuess);
                        console.log(guessesRemaining);
                        console.log(wrongGuesses);
                        console.log(answerArray.join(" "));
                        document.getElementById("lg").innerHTML = userGuess;
                        document.getElementById("ven").innerHTML = answerArray.join(" ");
                        document.getElementById("wgs").innerHTML = wrongGuesses;
                        document.getElementById("gr").innerHTML = guessesRemaining;
                    }
                }   
            }
        }
    }


else if (guessesRemaining === 0 && answerArray.includes("_")) {alert("You chose poorly!");}
else {alert("You chose wisely!");}
}
}