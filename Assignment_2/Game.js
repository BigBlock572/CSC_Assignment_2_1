
prompt("put name here "); // type name here (found by accident)


function conditionals() // programing logic
{
    var die1 = Math.ceil(Math.random()*20); // this is a statement 
    var die2 = Math.ceil(Math.random()*20); // this is added when more than 1 number is needed to introduce more variables
    alert(die1 + "" + die2); // this is adding the numbers together in string 
   
    if (die1 == 7 || die2 == 14) // checking conditions 
    {
        document.getElementById("stgame").innerHTML = "7 = first"; // if this happens then that happens
    }
    else if (die1 == 7 &&   die1 % 2 == 0) // checking conditions
    {
        document.getElementById("stgame").innerHTML = "14 = second"; // otherwise this happens 
    }
    else // the final statement 
    {
        document.getElementById("stgame").innerHTML = "21 = 3rd"; // conditions have been met 
    }
}

function showalert() 
{
    alert("Have I won yet or do we go again?"); // displayes message
}

function simpleDo() // will happen only once
{
    var i = 1; // stating the value of i
    var currTime = 180; // where the countdown is going to begin from
    do // always happens just once
    {
        setTimeout(function () {
            document.getElementById("CrapofCraps").innerHTML = "the time left is" + currTime; //connects to the main HTML file using the provided id
            currTime = currTime - 1; 
        }, 1000 * i); // tells function to wait for 1 second 
        i = i+1; 
    } while (i < 182); // makes sure the countdown goes down to 0
}
