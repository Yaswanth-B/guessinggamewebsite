//var name = window.prompt("Enter your name");

//console.log(name);
var num = Math.round(Math.random()*100);
var counter = 0;
var prevguess = [];
function addlist(){
const inputele = document.getElementById("numip");
inputele.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {      
      //event.preventDefault(); 
      randnum();
    }
});
}
function randnum(){  
    if(counter<10){

    let hint = "";

    
    let guess = document.getElementById("numip").value;

    function isin(arr,num){
        return arr.indexOf(num) > -1;
    }

    
    if(isin(prevguess,guess)){
        hint = "Already guessed. Try another number!";
    }
    else{
        if(guess.toString().trim() ===""){
            hint = "Enter a number! (No space)";
        }
        else if(guess<num){
            hint = "Guess higher";
            prevguess.push(guess);
            counter++;
        }
        else if(guess>num){
            hint = "Guess lower";
            prevguess.push(guess);
            counter++;
        }
        else if(guess==num){
            hint = "Congrats! You are correct.";
            counter++;
        }
        else{
            hint = "Enter a number!";
            counter++;
        }
        
    }
    
    
    
    
    document.getElementById("demo").innerHTML = `Hint: ${hint} (Guesses: ${counter})`;
    document.getElementById("prevnum").innerHTML = `Guessed Numbers: ${prevguess.toString().replaceAll(',', ' ')}`;
    document.getElementById("numip").value = "";
    }
    else{
        document.getElementById("demo").innerHTML = `You lost! (More than 10 guesses)`;
        document.getElementById("genbutton").style.display = "none";
    }
}