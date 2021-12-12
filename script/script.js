let gamestatus = false;
let turn = player1 = player2 = winning = xoVeld1 = xoVeld2 = xoVeld3 = xoVeld4 = xoVeld5 = xoVeld6 = xoVeld7 = xoVeld8 = xoVeld9 = 0 ;
let xVeld1 = xVeld2 = xVeld3 = xVeld4 = xVeld5 = xVeld6 = xVeld7 = xVeld8 = xVeld9 = 0 ;
let oVeld1 = oVeld2 = oVeld3 = oVeld4 = oVeld5 = oVeld6 = oVeld7 = oVeld8 = oVeld9 = 0 ;
let turncount = 0;
const ximg = "<img src='images/X.png' class='xoimage' width='100%'>";
const oimg = "<img src='images/O.png' class='xoimage' width='100%'>";
document.getElementById("btnnewgame").style.visibility = "visible";
document.getElementById("tekstveld").innerHTML = "Welkom, wil je Tic, Tac, Toe spelen?";


function newGame() {
    document.getElementById("btnnewgame").style.visibility = "hidden";
    gamestatus = true;
    winning = turn = turncount = xoVeld1 = xoVeld2 = xoVeld3 = xoVeld4 = xoVeld5 = xoVeld6 = xoVeld7 = xoVeld8 = xoVeld9 = 0;
    xVeld1 = xVeld2 = xVeld3 = xVeld4 = xVeld5 = xVeld6 = xVeld7 = xVeld8 = xVeld9 = 0 ;
    oVeld1 = oVeld2 = oVeld3 = oVeld4 = oVeld5 = oVeld6 = oVeld7 = oVeld8 = oVeld9 = 0 ;
    turn = randomIntFromInterval(1, 2);
    document.getElementById("tekstveld").innerHTML = "Speler" + turn + " is aan de beurt! Klik op een vak.";    
    clearvelds();  
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}  

function checkwinner() {
    turncount +=1;
    // X check
    // horizotaal 
    if ((xVeld1 == 1) && (xVeld2 == 1) && (xVeld3 == 1)) { winning = turn; }
    else if ((xVeld4 == 1) && (xVeld5 == 1) && (xVeld6 == 1)) { winning = turn;}
    else if ((xVeld7 == 1) && (xVeld8 == 1) && (xVeld9 == 1)) { winning = turn;}
    // vertikaal
    else if ((xVeld1 == 1) && (xVeld4 == 1) && (xVeld7 == 1)) { winning = turn;}
    else if ((xVeld2 == 1) && (xVeld5 == 1) && (xVeld8 == 1)) { winning = turn;}
    else if ((xVeld3 == 1) && (xVeld6 == 1) && (xVeld9 == 1)) { winning = turn;}
    //diagonaal
    else if ((xVeld1 == 1) && (xVeld5 == 1) && (xVeld9 == 1)) { winning = turn;}
    else if ((xVeld2 == 1) && (xVeld5 == 1) && (xVeld8 == 1)) { winning = turn;}
    else if ((xVeld3 == 1) && (xVeld5 == 1) && (xVeld7 == 1)) { winning = turn;}

    // O check
    // horizotaal
    else if ((oVeld1 == 1) && (oVeld2 == 1) && (oVeld3 == 1)) { winning = turn;}
    else if ((oVeld4 == 1) && (oVeld5 == 1) && (oVeld6 == 1)) { winning = turn;}
    else if ((oVeld7 == 1) && (oVeld8 == 1) && (oVeld9 == 1)) { winning = turn;}
    // vertikaal
    else if ((oVeld1 == 1) && (oVeld4 == 1) && (oVeld7 == 1)) { winning = turn;}
    else if ((oVeld2 == 1) && (oVeld5 == 1) && (oVeld8 == 1)) { winning = turn;}
    else if ((oVeld3 == 1) && (oVeld6 == 1) && (oVeld9 == 1)) { winning = turn;}
    //diagonaal
    else if ((oVeld1 == 1) && (oVeld5 == 1) && (oVeld9 == 1)) { winning = turn;}
    else if ((oVeld2 == 1) && (oVeld5 == 1) && (oVeld8 == 1)) { winning = turn;}
    else if ((oVeld3 == 1) && (oVeld5 == 1) && (oVeld7 == 1)) { winning = turn;}

    if (winning != 0) {
        if (winning == 1) { player1 += 1; }
        else if (winning == 2) { player2 +=1; }
        if (winning !=3){
        document.getElementById("tekstveld").innerHTML = "De winnaar is speler" + turn;
        document.getElementById("score").innerHTML = player1 + " - " + player2;
        gamestatus=false;
        winning = turn = xoVeld1 = xoVeld2 = xoVeld3 = xoVeld4 = xoVeld5 = xoVeld6 = xoVeld7 = xoVeld8 = xoVeld9 = 3 ;
        document.getElementById("btnnewgame").style.visibility = "visible";
        }
    }
    else if ((turncount == 9) && (winning != 3)) {
        gamestatus=false;
        winning = turn = xoVeld1 = xoVeld2 = xoVeld3 = xoVeld4 = xoVeld5 = xoVeld6 = xoVeld7 = xoVeld8 = xoVeld9 = 3 ;
        document.getElementById("btnnewgame").style.visibility = "visible";
        document.getElementById("tekstveld").innerHTML = "Gelijkspel, start een nieuwspel om verder te gaan!";
    }
}


function veld1(){ 
    if (xoVeld1 == 0){
        if (turn == 1)
        {
            turn = 2;
            xVeld1 = 1;
            xoimg = ximg;
        }
        else if (turn == 2)
        {
            turn = 1;
            oVeld1 = 1;
            xoimg = oimg;
        }
        xoVeld1 = 1;
        document.getElementById("veld1").innerHTML = xoimg;  
        document.getElementById("tekstveld").innerHTML = "Speler " + turn + " is aan de beurt! Klik op een vak.";
    }  
    checkwinner(); 
    return;
}
function veld2(){ 
    if (xoVeld2 == 0){
        if (turn == 1)
        {
            turn = 2;
            xVeld2 = 1;
            xoimg = ximg;
        }
        else if (turn == 2)
        {
            turn = 1;
            oVeld2 = 1;
            xoimg = oimg;
        }
        xoVeld2 = 1;
        document.getElementById("veld2").innerHTML = xoimg;  
        document.getElementById("tekstveld").innerHTML = "Speler " + turn + " is aan de beurt! Klik op een vak.";
    }   
    checkwinner()
    return; 
}
function veld3(){ 
    if (xoVeld3 == 0){
        if (turn == 1)
        {
            turn = 2;
            xVeld3 = 1;
            xoimg = ximg;
        }
        else if (turn == 2)
        {
            turn = 1;
            oVeld3 = 1;
            xoimg = oimg;
        }
        xoVeld3 = 1;
        document.getElementById("veld3").innerHTML = xoimg;  
        document.getElementById("tekstveld").innerHTML = "Speler " + turn + " is aan de beurt! Klik op een vak.";
    }   
    checkwinner()
    return;
}
function veld4(){ 
    if (xoVeld4 == 0){
        if (turn == 1)
        {
            turn = 2;
            xVeld4 = 1;
            xoimg = ximg;
        }
        else if (turn == 2)
        {
            turn = 1;
            oVeld4 = 1;
            xoimg = oimg;
        }
        xoVeld4 = 1;
        document.getElementById("veld4").innerHTML = xoimg;  
        document.getElementById("tekstveld").innerHTML = "Speler " + turn + " is aan de beurt! Klik op een vak.";
    }   
    checkwinner()
    return;
}
function veld5(){ 
    if (xoVeld5 == 0){
        if (turn == 1)
        {
            turn = 2;
            xVeld5 = 1;
            xoimg = ximg;
        }
        else if (turn == 2)
        {
            turn = 1;
            oVeld5 = 1;
            xoimg = oimg;
        }
        xoVeld5 = 1;
        document.getElementById("veld5").innerHTML = xoimg;  
        document.getElementById("tekstveld").innerHTML = "Speler " + turn + " is aan de beurt! Klik op een vak.";
    }   
    checkwinner()
    return;
}
function veld6(){ 
    if (xoVeld6 == 0){
        if (turn == 1)
        {
            turn = 2;
            xVeld6 = 1;
            xoimg = ximg;
        }
        else if (turn == 2)
        {
            turn = 1;
            oVeld6 = 1;
            xoimg = oimg;
        }
        xoVeld6 = 1;
        document.getElementById("veld6").innerHTML = xoimg;  
        document.getElementById("tekstveld").innerHTML = "Speler " + turn + " is aan de beurt! Klik op een vak.";
    }  
    checkwinner() 
    return;
}
function veld7(){ 
    if (xoVeld7 == 0){
        if (turn == 1)
        {
            turn = 2;
            xVeld7 = 1;
            xoimg = ximg;
        }
        else if (turn == 2)
        {
            turn = 1;
            oVeld7 = 1;
            xoimg = oimg;
        }
        xoVeld7 = 1;
        document.getElementById("veld7").innerHTML = xoimg;  
        document.getElementById("tekstveld").innerHTML = "Speler " + turn + " is aan de beurt! Klik op een vak.";
    }   
    checkwinner()
    return;
}
function veld8(){ 
    if (xoVeld8 == 0){
        if (turn == 1)
        {
            turn = 2;
            xVeld8 = 1;
            xoimg = ximg;
        }
        else if (turn == 2)
        {
            turn = 1;
            oVeld8 = 1;
            xoimg = oimg;
        }
        xoVeld8 = 1;
        document.getElementById("veld8").innerHTML = xoimg;  
        document.getElementById("tekstveld").innerHTML = "Speler " + turn + " is aan de beurt! Klik op een vak.";
    }  
    checkwinner() 
    return;
}
function veld9(){ 
    if (xoVeld9 == 0){
        if (turn == 1)
        {
            turn = 2;
            xVeld9 = 1;
            xoimg = ximg;
        }
        else if (turn == 2)
        {
            turn = 1;
            oVeld9 = 1;
            xoimg = oimg;
        }
        xoVeld9 = 1;
        document.getElementById("veld9").innerHTML = xoimg;  
        document.getElementById("tekstveld").innerHTML = "Speler " + turn + " is aan de beurt! Klik op een vak.";
    }   
    checkwinner()
    return;

}


function clearvelds(){
    document.getElementById("veld1").innerHTML = "";
    document.getElementById("veld2").innerHTML = "";
    document.getElementById("veld3").innerHTML = "";
    document.getElementById("veld4").innerHTML = "";
    document.getElementById("veld5").innerHTML = "";
    document.getElementById("veld6").innerHTML = "";
    document.getElementById("veld7").innerHTML = "";
    document.getElementById("veld8").innerHTML = "";
    document.getElementById("veld9").innerHTML = "";
}