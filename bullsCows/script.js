const tables = ["input-board", "input-board-two"];
const squareSize = "85px";
const ansSize = "45px";
let ti = 0;

let t1 = [];
let t2 = [];

function makeTable() {
    for(let i = 0; i < 5; i++) {
        const line = document.createElement('d');
        line.style.display = "flex";
        line.style.flexWrap = "nowrap";
        line.style.border = "3px solid rgb(41, 48, 54)";
        for(let j = 0; j < 4; j++) {
            const block = document.createElement('input');
            block.type = Text;
            block.style.width = squareSize;
            block.style.height = squareSize;
            block.style.backgroundColor = "rgb(41, 48, 54)";
            block.maxLength = 1;
            block.style.margin = "11px";
            block.style.border = "rgba(255, 255, 255, 0)"
            block.style.fontSizeAdjust = "3";
            block.style.textAlign = "center";
    
            line.appendChild(block);
        }
        document.getElementById(tables[ti]).appendChild(line);
    }
    if(ti == 0) {
        ti = 1;
    } else {
        ti = 0;
    }
}

function makeAnsTable() {
    for(let i = 0; i < 10; i++) {
        const line = document.createElement('div');
        line.style.display = "flex";
        line.style.flexWrap = "nowrap";
        line.style.border = "3px solid green";
        for(let j = 0; j < 4; j++) {
            const ans = document.createElement('div');
            block.type = Text;
            block.style.width = ansSize;
            block.style.height = ansSize;
            block.style.backgroundColor = "rgb(41, 48, 54)";
            block.maxLength = 1;
            block.style.margin = "11px";
            block.style.border = "rgba(255, 255, 255, 0)"
            block.style.fontSizeAdjust = "3";
            block.style.textAlign = "center";

            line.appendChild(block);
        }
        document.getElementById('answer-board').appendChild('line');
    }
}

document.getElementById('start').addEventListener("click", function() {
    document.getElementById('page').style.animation = "disappear 2s";
    document.getElementById('page').style.animationFillMode = "forwards";

    makeTable();
    makeTable();
});