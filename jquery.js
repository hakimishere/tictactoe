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
	$('#playerturn').html('It is Player '+whoseTurn+"'s turn.");//document.getElementById('playerturn').innerHTML="It is Player "+whoseTurn+"'s turn."
};

$('#b1').on('click', clickedb1);
$('#b2').on('click', clickedb2);
$('#b3').on('click', clickedb3);
$('#b4').on('click', clickedb4);
$('#b5').on('click', clickedb5);
$('#b6').on('click', clickedb6);
$('#b7').on('click', clickedb7);
$('#b8').on('click', clickedb8);
$('#b9').on('click', clickedb9);

function clickedb1() {
$('#b1').css("background", colorNow).html(whoseTurn)
//clickb1.style.background = colorNow;
//clickb1.innerHTML = whoseTurn;
board[0][0] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
$('#b1').off('click', clickedb1);
}

function clickedb2() {
$('#b2').css("background", colorNow).html(whoseTurn)
//clickb1.style.background = colorNow;
//clickb1.innerHTML = whoseTurn;
board[0][1] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
$('#b2').off('click', clickedb2);
}

function clickedb3() {
$('#b3').css("background", colorNow).html(whoseTurn)
//clickb1.style.background = colorNow;
//clickb1.innerHTML = whoseTurn;
board[0][2] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
$('#b3').off('click', clickedb3);
}

function clickedb4() {
$('#b4').css("background", colorNow).html(whoseTurn)
//clickb1.style.background = colorNow;
//clickb1.innerHTML = whoseTurn;
board[1][0] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
$('#b4').off('click', clickedb4);
}

function clickedb5() {
$('#b5').css("background", colorNow).html(whoseTurn)
//clickb1.style.background = colorNow;
//clickb1.innerHTML = whoseTurn;
board[1][1] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
$('#b5').off('click', clickedb5);
}

function clickedb6() {
$('#b6').css("background", colorNow).html(whoseTurn)
//clickb1.style.background = colorNow;
//clickb1.innerHTML = whoseTurn;
board[1][2] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
$('#b6').off('click', clickedb6);
}

function clickedb7() {
$('#b7').css("background", colorNow).html(whoseTurn)
//clickb1.style.background = colorNow;
//clickb1.innerHTML = whoseTurn;
board[2][0] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
$('#b7').off('click', clickedb7);
}

function clickedb8() {
$('#b8').css("background", colorNow).html(whoseTurn)
//clickb1.style.background = colorNow;
//clickb1.innerHTML = whoseTurn;
board[2][1] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
$('#b8').off('click', clickedb8);
}

function clickedb9() {
$('#b9').css("background", colorNow).html(whoseTurn)
//clickb1.style.background = colorNow;
//clickb1.innerHTML = whoseTurn;
board[2][2] = whoseTurn;
getWinner();
switchPlayer();
whichTurn++;
$('#b9').off('click', clickedb9);
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
