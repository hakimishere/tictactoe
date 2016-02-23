var whoseTurn = "X";
var whichTurn = 1;
var players = [["X", "#87CEFA"],["O","#CD5C5C"]];
var colorNow = "#87CEFA";
// var playerXColor = "#87CEFA";
// var playerOColor = "#CD5C5C";
var board = [[null, null, null], [null, null, null], [null, null, null]];

function switchPlayer() {
	if(whichTurn%2===0) {
		whoseTurn = players[0][0];
		colorNow = players[0][1];
	}
	else {
		whoseTurn = players[1][0];
		colorNow = players[1][1];
	}
	document.getElementById('playerturn').innerHTML="It is Player "
+whoseTurn+"'s turn."
};

function clickedb1() {
var clickb1 = document.getElementById("b1")
clickb1.style.background = colorNow;
clickb1.innerHTML = whoseTurn;
board[0][0] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
clickb1.onclick = "";
}

function clickedb2() {
var clickb2 = document.getElementById("b2")
clickb2.style.background = colorNow;
clickb2.innerHTML = whoseTurn;
board[0][1] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
clickb2.onclick = "";
}

function clickedb3() {
var clickb3 = document.getElementById("b3")
clickb3.style.background = colorNow;
clickb3.innerHTML = whoseTurn;
board[0][2] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
clickb3.onclick = "";
}

function clickedb4() {
var clickb4 = document.getElementById("b4")
clickb4.style.background = colorNow;
clickb4.innerHTML = whoseTurn;
board[1][0] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
clickb4.onclick = "";
}

function clickedb5() {
var clickb5 = document.getElementById("b5")
clickb5.style.background = colorNow;
clickb5.innerHTML = whoseTurn;
board[1][1] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
clickb5.onclick = "";
}

function clickedb6() {
var clickb6 = document.getElementById("b6")
clickb6.style.background = colorNow;
clickb6.innerHTML = whoseTurn;
board[1][2] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
clickb6.onclick = "";
}

function clickedb7() {
var clickb7 = document.getElementById("b7")
clickb7.style.background = colorNow;
clickb7.innerHTML = whoseTurn;
board[2][0] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
clickb7.onclick = "";
}

function clickedb8() {
var clickb8 = document.getElementById("b8")
clickb8.style.background = colorNow;
clickb8.innerHTML = whoseTurn;
board[2][1] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
clickb8.onclick = "";
}

function clickedb9() {
var clickb9 = document.getElementById("b9")
clickb9.style.background = colorNow;
clickb9.innerHTML = whoseTurn;
board[2][2] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
clickb9.onclick = "";
}

function getWinner() {
	if (board[0][0]==="X" && board[0][1]==="X" && board[0][2]==="X") {
		alert("Player X wins!")
	}
	else if (board[1][0]==="X" && board[1][1]==="X" && board[1][2]==="X") {
		alert("Player X wins!")
	}
	else if (board[2][0]==="X" && board[2][1]==="X" && board[2][2]==="X") {
		alert("Player X wins!")
	}
	else if (board[0][0]==="X" && board[1][0]==="X" && board[2][0]==="X") {
		alert("Player X wins!")
	}
	else if (board[0][1]==="X" && board[1][1]==="X" && board[2][1]==="X") {
		alert("Player X wins!")
	}
	else if (board[0][2]==="X" && board[1][2]==="X" && board[2][2]==="X") {
		alert("Player X wins!")
	}
	else if (board[0][0]==="X" && board[1][1]==="X" && board[2][2]==="X") {
		alert("Player X wins!")
	}
	else if (board[0][2]==="X" && board[1][1]==="X" && board[2][0]==="X") {
		alert("Player X wins!")
	}
	else if (board[0][0]==="O" && board[0][1]==="O" && board[0][2]==="O") {
		alert("Player O wins!")
	}
	else if (board[1][0]==="O" && board[1][1]==="O" && board[1][2]==="O") {
		alert("Player O wins!")
	}
	else if (board[2][0]==="O" && board[2][1]==="O" && board[2][2]==="O") {
		alert("Player O wins!")
	}
	else if (board[0][0]==="O" && board[1][0]==="O" && board[2][0]==="O") {
		alert("Player O wins!")
	}
	else if (board[0][1]==="O" && board[1][1]==="O" && board[2][1]==="O") {
		alert("Player O wins!")
	}
	else if (board[0][2]==="O" && board[1][2]==="O" && board[2][2]==="O") {
		alert("Player O wins!")
	}
	else if (board[0][0]==="O" && board[1][1]==="O" && board[2][2]==="O") {
		alert("Player O wins!")
	}
	else if (board[0][2]==="O" && board[1][1]==="O" && board[2][0]==="O") {
		alert("Player O wins!")
	}
	else if (whichTurn > 8) {
		alert("It's a draw. Fancy a rematch?");
	}
}

// function clearBoard() {
// 	whichTurn = 1;
// 	currentPlayer = "X";
// 	for (var i=0; i <board.length; i++) {
// 		for (var j=0; j <board.length; j++) {
// 			board[i][j] = null;
// 		}
// 	}
// }
