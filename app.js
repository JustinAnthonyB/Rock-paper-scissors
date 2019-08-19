//Caching the DOM
//or storing for future use
let p1_Score = 0;
let p2_Score = 0;
const p1Score_span = document.getElementById("player1-score")
const p2Score_span = document.getElementById("player2-score")
const score_div = document.querySelector(".score");
const res_div = document.querySelector(".res");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

//Event listeners

function game_1(){
    const options = ['r','p','s'];
    const ranNum = Math.floor(Math.random() * 3);
    return options[ranNum];
}
// console.log(game_1())

function win(){
    p1_Score++;
    p1Score_span.innerHTML = p1_Score;
    res_div.innerHTML = "VINNAR";

}
function lose(){
    p2_Score++;
    p2Score_span.innerHTML = p2_Score;
    res_div.innerHTML = "LOSER"

}
function drw(){
    res_div.innerHTML = "TWO LOSERS!!!"
}




function game(p1_Option){
    const p2_Option = game_1();
    // console.log(p1_Option); Working
    // console.log(p2_Option); Working
    const computerOption = game_1();
    switch (p1_Option + computerOption){
        case "rs":
        case "pr":
        case "sp":
            win();
            // console.log("Player 1 wins!");
            break
        case "rp":
        case "ps":
        case "sr":
            lose();
            // console.log("Player 2 wins!");
            break;
        case "rr":
        case "pp":
        case "ss":
            drw();
            // console.log("EVERYONE LOSES!!!!");
            break;    
    }
}



function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");  
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

//calls "game" function
main()