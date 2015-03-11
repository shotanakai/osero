
var board = document.getElementById('board');
board.style.background = 'green';
var gBoard = [
	[ 0, 0, 0, 0, 0, 0, 0, 0],
	[ 0, 0, 0, 0, 0, 0, 0, 0],
	[ 0, 0, 0, 0, 0, 0, 0, 0],
	[ 0, 0, 0, 1,-1, 0, 0, 0],
	[ 0, 0, 0,-1, 1, 0, 0, 0],
	[ 0, 0, 0, 0, 0, 0, 0, 0],
	[ 0, 0, 0, 0, 0, 0, 0, 0],
	[ 0, 0, 0, 0, 0, 0, 0, 0],
];
var Turn = 1;

//置けるか８方向を確認
function check(x,y, flip) {
	var result = false;
	var piece = Turn;
	var flag = 0;
	if(gBoard[y][x] != 0) {
		return false;
	}
	for(p = x+1; p<8; p++) {
		if (gBoard[y][p] == 0) {
			break;/*処理を終了*/
		}
		if(gBoard[y][p] == -piece) {
			flag = 1;/*フラグをたて次のマスへ*/
		}
		if(gBoard[y][p] == piece) {
			if (flag != 1) {
				break;
			}
			if (gBoard[y][p-1] == piece) {
				break;
			} else if (gBoard[y][p-1] == -piece) {
				if(flip == false){
					return true;
				} else {
					for(var i=x+1; i<=p-1; i++) {
						gBoard[y][i] = piece;
					}
					result = true;
				}
			}
		break;
		}
	}

	var flag = 0;
	for(p = x-1; p>=0; p--) {
		if (gBoard[y][p] == 0) {
			break;/*処理を終了*/
		}
		if(gBoard[y][p] == -piece) {
			flag = 1;/*フラグをたて次のマスへ*/
		}
		if(gBoard[y][p] == piece) {
			if (flag != 1) {
				break;
			}
			if (gBoard[y][p+1] == piece) {
				break;
			} else if (gBoard[y][p+1] == -piece) {
				if(flip == false) {
					return true;
				} else {
					for(var i=x-1; i>=p+1; i--) {
						gBoard[y][i] = piece;
					}
					result = true;
				}
			}
		break;
		}
	}

	var flag = 0;
	for(p = y+1; p<8; p++) {
		if (gBoard[p][x] == 0) {
			break;/*処理を終了*/
		}
		if(gBoard[p][x] == -piece) {
			flag = 1;/*フラグをたて次のマスへ*/
		}
		if(gBoard[p][x] == piece) {
			if (flag != 1) {
				break;
			}
			if (gBoard[p-1][x] == piece) {
				break;
			} else if (gBoard[p-1][x] == -piece) {
				if(flip == false){
						return true;
					} else {
						for(var i=y+1; i<=p-1; i++) {
							gBoard[i][x] = piece;
						}
						result = true;
					}
			}
		break;
		}
	}

	var flag = 0;
	for(p = y-1; p>=0; p--) {
		if (gBoard[p][x] == 0) {
			break;/*処理を終了*/
		}
		if(gBoard[p][x] == -piece) {
			flag = 1;/*フラグをたて次のマスへ*/
		}
		if(gBoard[p][x] == piece) {
			if (flag != 1) {
				break;
			}
			if (gBoard[p+1][x] == piece) {
				break;
			} else if (gBoard[p+1][x] == -piece) {
				if(flip == false) {
					return true;
				} else {
					for(var i=y-1; i>=p+1; i--) {
						gBoard[i][x] = piece;
					}
					result = true;
				}

			}
		break;
		}
	}

	var flag = 0;
	for(p = x+1, q = y+1; p<8 && q<8; p++, q++) {
		if (gBoard[q][p] == 0) {
			break;/*処理を終了*/
		}
		if(gBoard[q][p] == -piece) {
			flag = 1;/*フラグをたて次のマスへ*/
		}
		if(gBoard[q][p] == piece) {
			if (flag != 1) {
				break;
			}
			if (gBoard[q-1][p-1] == piece) {
				break;
			} else if (gBoard[q-1][p-1] == -piece) {
				if(flip == false){
					return true;
				} else {
					for(var i=x+1, j=y+1; i<=p-1, j<=q-1; i++, j++) {
						gBoard[j][i] = piece;
					}
					result = true;
				}
			}
		break;
		}
	}
	var flag = 0;
	for(p = x-1, q = y-1; p>=0 && q>=0; p--, q--) {
		if (gBoard[q][p] == 0) {
			break;/*処理を終了*/
		}
		if(gBoard[q][p] == -piece) {
			flag = 1;/*フラグをたて次のマスへ*/
		}
		if(gBoard[q][p] == piece) {
			if (flag != 1) {
				break;
			}
			if (gBoard[q+1][p+1] == piece) {
				break;
			} else if (gBoard[q+1][p+1] == -piece) {
				if(flip == false){
					return true;
				} else {
					for(var i=x-1, j=y-1; i>=p+1, j>=q+1; i--, j--) {
						gBoard[j][i] = piece;
					}
					result = true;
				}
			}
		break;
		}
	}
	for(p = x+1, q = y-1; p<8 && q>=0; p++, q--) {
		if (gBoard[q][p] == 0) {
			break;/*処理を終了*/
		}
		if(gBoard[q][p] == -piece) {
			flag = 1;/*フラグをたて次のマスへ*/
		}
		if(gBoard[q][p] == piece) {
			if (flag != 1) {
				break;
			}
			if (gBoard[q+1][p-1] == piece) {
				break;
			} else if (gBoard[q+1][p-1] == -piece) {
				if(flip == false){
					return true;
				} else {
					for(var i=x+1, j=y-1; i<=p-1, j>=q+1; i++, j--) {
						gBoard[j][i] = piece;
					}
					result = true;
				}
			}
		break;
		}
	}

	for(p = x-1, q = y+1; p>=0 && q<8; p--, q++) {
		if (gBoard[q][p] == 0) {
			break;/*処理を終了*/
		}
		if(gBoard[q][p] == -piece) {
			flag = 1;/*フラグをたて次のマスへ*/
		}
		if(gBoard[q][p] == piece) {
			if (flag != 1) {
				break;
			}
			if (gBoard[q-1][p+1] == piece) {
				break;
			} else if (gBoard[q-1][p+1] == -piece) {
				if(flip == false){
					return true;
				} else {
					for(var i=x-1, j=y+1; i>=p+1, j<=q-1; i--, j++) {
						gBoard[j][i] = piece;
					}
					result = true;
				}

			}
		break;
		}
	}


	return result;
}
//パス、終了判定(置ける場所があるかどうか)
var pass_flag = 0; 
function change(x,y,flip) {
	for(y=0; y<8; y++) {
		for(x=0; x<8; x++) {
			if(check(x,y,false) == true) {
				return ;
			} 
		}
	}
	Turn = -Turn;
	for(y=0; y<8; y++) {
		for(x=0; x<8; x++) {
			if(check(x,y,false) == true) {
				show();
				alert("置ける場所がないのでパスします！");
				return ;
			} 
		}
	}
	GameOver();
}

function PutStone(x,y) {
	console.log(check(x,y,false));
	if(check(x,y,true) == false) {
		console.log("置けません！");
		return;
	}
	gBoard[y][x] = Turn;
	Turn = -Turn;
	console.dir(gBoard);
	count();
	change();
	show();
	debug();
}

//駒の数を数える処理
var winWhite = 0;
function count() {
	var b = 0;
	var w = 0;
	var put_flag = 0;
	for ( var y = 0; y < 8; y++) {
		for ( var x = 0; x < 8; x++) {
			if(gBoard[y][x] == 1) {
				b++;
			} else if (gBoard[y][x] == -1) {
				w++;
			} else if (gBoard[y][x] == 0) {
				put_flag++;
			}
		}
	}
	var how_many=document.getElementById("how_many");
    how_many.innerHTML="●"+b+"  対  ○"+w;
	if (w ==b) {
		winWhite = 3;
	}
	else if (w < b) {
		winWhite = 1;
	} else if (w > b) {
		winWhite = 2;
	}
}
//勝敗判定
function GameOver() {
	console.log(winWhite);	
	console.log("終わり！");
		var fin = "";
		if (winWhite == 1) {
			fin+="黒の勝ち";
		} else if (winWhite == 2) {
			fin+="白の勝ち";
		} else if (winWhite == 3) {
			fin+="引き分け";
		}
		finish.innerHTML = fin;
		show();
		return;
}
//表示(View)部分
function show() {
	var html = "";
	for(y=0; y<8; y++) {
		html+="<tr>";
		for(x=0; x<8; x++) {
			if (gBoard[y][x] == 0) {
				className = "green";
			} else if (gBoard[y][x] == -1) {
				className = "white";
			} else if (gBoard[y][x] == 1) {
				className = "black";
			}
			html+="<td class=\""+className+"\" onClick=\"PutStone(" + x + "," + y + ")\">";
				html+="●";
			html+="</td>";
		}
		html+="</tr>";
	}
	board.innerHTML = html;
	var pin = "";
	if (Turn ==1) {
		pin+="●黒の番です";
	} else {
		pin+="○白の番です";
	}
	turn.innerHTML = pin;
}
show();

//置けるマスを表示
var debug = function() {
	var x, y;
	for (x = 0; x < 8; x++) {
		for (y = 0; y < 8; y++) {
			if (check(y, x, false)) {
				document.getElementById('board').childNodes[0].childNodes[x].childNodes[y].setAttribute('style', 'background-color: red; color: red;');
			} else {
				document.getElementById('board').childNodes[0].childNodes[x].childNodes[y].setAttribute('style', 'background-color: transparent;');
			}
		}
	}
};