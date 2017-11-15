var cells;
var debug=true;
var turnCount=0;

function Init(){
	cells=[0,0,0,0,0,0,0,0,0];
	$("#Board").hide();
	$("#turn").hide();
	$("#turnLabel").hide();
	$("#winner").hide();
	id = "#cell";
	if (debug) {
		printCells();
		$("#debug").show();
	} else {
		$("#debug").hide();
	}
};
/*function doMove(player, cell){
	if (!isNAN(x) && ((x < 9) && (x >= 0))){
		if (cells[cell]===0){
			cells[cell]=player;
			console.log(cells);
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};*/

function XChanged(){
	$("#XName").text($("#X").val());
};

function OChanged(){
	$("#OName").text($("#O").val());
};

function getCells(x){
	if (!isNAN(x) && ((x < 9) && (x >= 0))){
		return cells[x];
	} else return false;
};

function startGame(){
	clearBoard();
	turnCount = 0;
	$("#Board").show();
	$("#winner").text("").hide()
	$("#currPlayer").html($("#X").val());
	$("#turn").show();
	$("#count").text(turnCount);
	$("#turnLabel").show();
	$("#start").hide();
	if (debug){ printCells();}
};

function getPlayerName(){
	return $("#currPlayer").text();
};
function getPlayer(){
	var p = getPlayerName();
	if (p==$("#XName").text()) {
		return "X";
	} else {
		return "O";
	}
};

function doMove(cell){
	player = getPlayer();
	if (cells[cell]===0){
		turnCount++;
		$("#count").text(turnCount);
		var id="#cell"+cell;
		var tdHTML="&nbsp;"+player+"&nbsp;";
		$(id).html(tdHTML);
		$(id).addClass("played");
		$(id).removeClass("board");
		if (debug){
			var holder=$(id).attr("disabled");
			console.log( id + ", disabled=" + holder);
		}
		$(id).attr("disabled","true");
		cells[cell]=player;
		if (debug) {printCells();}
		if (checkForWin(player, cell)){
			if (debug){console.log("game won by player "+ player);}
			doWin(getPlayerName());
			return "game over";
		} else {
			if (turnCount > 8) {
				//do Draw
				doDraw();
			}
		}
		changePlayer();
		return true;
	} else {
		return false;
	}
};

function printCells(){
	var id="";
	for (var i=0; i<9;i++){
		id="#c"+i;
		$(id).text(cells[i]);
	}
}

function checkForWin(player, cell){
	switch ( cell ){
		case 0:
			return check0(player);
			break;
		case 1:
			return check1(player);
			break;
		case 2:
			return check2(player);
			break;
		case 3:
			return check3(player);
			break;
		case 4:
			return check4(player);
			break;
		case 5:
			return check5(player);
			break;
		case 6:
			return check6(player);
			break;
		case 7:
			return check7(player);
			break;
		case 8:
			return check8(player);
			break;
		default:
	}
};

function changePlayer(){
	player = getPlayerName();
	if (player==$("#XName").text()){
		$("#currPlayer").text($("#OName").text());
	} else {
		$("#currPlayer").text($("#XName").text());
	}
};
function check0(plaqyer){
	var accross = (cells[0]===cells[1])&&(cells[1]===cells[2]);
	var down = (cells[0]===cells[3])&&(cells[3]===cells[6]);
	var diag = (cells[0]===cells[4])&&(cells[4]===cells[8]);
	if (accross || down || diag){
		if (debug){ console.log("check0 returns true.");}
		return true;
	} else {
		if (debug){ console.log("check0 returns false.");}
		return false;
	}
};
function check1(plaqyer){
	var across = (cells[0]===cells[1])&&(cells[1]===cells[2]);
	var down = (cells[1]===cells[4])&&(cells[4]===cells[7]);
	if (across||down){
		if (debug){ console.log("check1 returns true.");}
		return true;
	} else {
		if (debug){ console.log("check1 returns false.");}
		return false;
	}
};
function check2(plaqyer){
	var across=(cells[0]===cells[1])&&(cells[1]===cells[2]);
	var down=(cells[2]===cells[5])&&(cells[5]===cells[8]);
	var diag=(cells[2]===cells[4])&&(cells[4]===cells[6]);
	if (across||down||diag){
		if (debug){ console.log("check2 returns true.");}
		return true;
	} else {
		if (debug){ console.log("check2 returns false.");}
		return false;
	}
};
function check3(plaqyer){
	var across=(cells[3]===cells[4])&&(cells[4]===cells[5]);
	var down=(cells[0]===cells[3])&&(cells[3]===cells[6]);
	if (across||down){
		if (debug){ console.log("check3 returns true.");}
		return true;
	} else {
		if (debug){ console.log("check3 returns false.");}
		return false;
	}
};
function check4(plaqyer){
	var across=(cells[3]===cells[4])&&(cells[4]===cells[5]);
	var down=(cells[1]===cells[4])&&(cells[4]===cells[7]);
	var diag1=(cells[2]===cells[4])&&(cells[4]===cells[6]);
	var diag2=(cells[0]===cells[4])&&(cells[4]===cells[8]);
	if (across||down||diag1||diag2){
		if (debug){ console.log("check4 returns true.");}
		return true;
	} else {
		if (debug){ console.log("check4 returns false.");}
		return false;
	}
};
function check5(plaqyer){
	var across=(cells[3]===cells[4])&&(cells[4]===cells[5]);
	var down=(cells[2]===cells[5])&&(cells[5]===cells[8]);
	if (across||down){
		if (debug){ console.log("check5 returns true.");}
		return true;
	} else {
		if (debug){ console.log("check5 returns false.");}
		return false;
	}
};
function check6(plaqyer){
	var across=(cells[6]===cells[7])&&(cells[7]===cells[8]);
	var down=(cells[0]===cells[3])&&(cells[3]===cells[6]);
	var diag=(cells[2]===cells[4])&&(cells[4]===cells[6]);
	if (across||down||diag){
		if (debug){ console.log("check6 returns true.");}
		return true;
	} else {
		if (debug){ console.log("check6 returns false.");}
		return false;
	}
};
function check7(plaqyer){
	var across=(cells[6]===cells[7])&&(cells[7]===cells[8]);
	var down=(cells[1]===cells[4])&&(cells[4]===cells[7]);
	if (across||down){
		if (debug){ console.log("check7 returns true.");}
		return true;
	} else {
		if (debug){ console.log("check7 returns false.");}
		return false;
	}
};
function check8(plaqyer){
	var	across=(cells[6]===cells[7])&&(cells[7]===cells[8]);
	var down=(cells[2]===cells[5])&&(cells[5]===cells[8]);
	var diag = (cells[0]===cells[4])&&(cells[4]===cells[8]);
	if (across||down||diag){
		if (debug){ console.log("check8 returns true.");}
		return true;
	} else {
		if (debug){ console.log("check8 returns false.");}
		return false;
	}
};
function doWin(pname){
	//declare the winner
	$("#winner").html('<h3 class="centered">'+pname+" won!</h3>").show();
	//increase the score
	switch(pname){
		case $("#XName").text():
			$("#p1").val(Number($("#p1").val())+1);
			break;
		case $("#OName").text():
			$("#p2").val(Number($("#p2").val())+1);
		default:
	}
	//disable the board
	var id="#cell";
	for (var i=0;i<9;i++){
		$(id+i).attr("disabled","true");
	}
	//hide the turn notice, show the start button
	$("#turn").hide();
	$("#start").show();
}
function clearBoard(){
	cells=[0,0,0,0,0,0,0,0,0];
	var id="#cell";
	//var tdHTML="&nbsp;B&nbsp;";
	for (var i=0;i<9;i++){
		$(id+i).html("&nbsp;B&nbsp;").addClass("board").removeClass("played");
	}
}

function doDraw(){
	$("#winner").html('<h3 class="centered">It\'s a draw!</h3>').show();
	//disable the board
	var id="#cell";
	for (var i=0;i<9;i++){
		$(id+i).attr("disabled","true");
	}
	//hide the turn notice, show the start button
	$("#turn").hide();
	$("#start").show();
}