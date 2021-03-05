let area = document.getElementById('area');
let cell = document.getElementsByClassName('cell');
let currentPlayer = document.getElementById('curPlyr');

let player = "x";
let stat = {
    'x': 0,
    'o': 0,
    'd': 0
}
let winCombinations = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

for(let i = 1; i <= 9; i++) {
    area.innerHTML += "<div class='cell' id=" + i + "></div>";
}

for (let i = 0; i< cell.length; i++) {
    cell[i].addEventListener('click', cellClick );
}

function cellClick() {

    let data = [];
    
    if(!this.innerHTML) {
        this.innerHTML = player;
    }else {
        alert("Клітинка зайнята");
        return;
    }

    for(let i = 0; i < cell.length; i++){
        if(cell[i].innerHTML == player){
            data.push(parseInt(cell[i].getAttribute('id')));
        }
    }

    if(checkWin(data)) {
        stat[player] += 1;
        restart("Переміг: " + player);
    }else {
        let draw = true;
        for(let i = 0; i < cell.length; i++) {
            if(cell[i].innerHTML == '') draw = false;
        }
        if(draw) {
            stat.d += 1;
            restart("Нічия");
        }
    }

    if (player =="x"){
        player = "o";
    }else{
        player = "x";
    }
    currentPlayer.innerHTML = player;
}

function checkWin(data) {
    for(let i = 0; i < winCombinations.length; i++) {
        let win = true;
        for(let j = 0; j < winCombinations[i].length; j++) {
            let id = winCombinations[i][j];
            let ind = data.indexOf(id);

            if(ind == -1) {
                win = false
            }
        }

        if(win) return true;
    }
    return false;
}

function restart(text) {
    
    alert(text);
    for(let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }
    updateStat();
}

function updateStat() {
    document.getElementById('sX').innerHTML = stat.x;
    document.getElementById('sO').innerHTML = stat.o;
    document.getElementById('sD').innerHTML = stat.d;
}