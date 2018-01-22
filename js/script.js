/*global $*/
//GLOBAL VARIABLES
var userChoice = "";
var computerChoice = "";
var winner = "";
var choices = ["rock", "paper", "scissors"];

//FUNCTIONS
$("#button").click(function(){
         userChoice = $("#input").val();
        $("#user").html(userChoice)
        computerChoice = randomComputer()
        $("#computer").html(computerChoice)
        if(userChoice === "rock" && computerChoice === "rock"){
                $("#winner").html("No one wins");
        } else if(userChoice === "rock" && computerChoice === "paper"){
                 $("#winner").html("Computer Wins!!");
        } else if(userChoice === "rock" && computerChoice === "scissors"){
                 $("#winner").html("User Wins!!");
        } else if(userChoice === "paper" && computerChoice === "rock"){
                $("#winner").html("User Wins!!");
        } else if(userChoice === "paper" && computerChoice === "paper"){
                $("#winner").html("No one wins");
        } else if(userChoice === "paper" && computerChoice ==="scissors"){
                $("#winner").html("Computer Wins");
        } else if(userChoice === "scissors" && computerChoice === "rock"){
                $("#winner").html("Computer Wins");
        } else if(userChoice === "scissors" && computerChoice === "paper"){
                $("#winner").html("User Wins");
        } else if(userChoice === "scissors" && computerChoice === "scissors"){
                $("#winner").html("No one Wins");
        }
});
function randomComputer(){
        return choices[Math.floor(Math.random() * 3)];
}