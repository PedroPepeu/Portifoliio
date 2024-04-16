let tries = 0;

const blockS = "85px";

function createTable() {
    tries+=1;
    
    const line = document.createElement("div");
    for(let i = 0; i < 4; i++) {
        const block = document.createElement("input");
        block.type = "number";
        block.style.width = blockS;
        block.style.height = blockS;
        block.style.border = "8px solid rgb(31, 27, 54)";
        block.style.backgroundColor = "rgb(46, 41, 84)";
        block.style.borderRadius = "5px";
        block.style.marginRight = "6px";
        block.style.fontSizeAdjust = 3;
        block.style.textAlign = "center";
        line.appendChild(block);
    }
    const submit = document.createElement("button");
    const text = document.createTextNode("submit");
    document.getElementById('input-board').appendChild(line);
}

document.getElementById('start').addEventListener("click", function() {
    document.getElementById('page').style.animation = "disappear 2s";
    document.getElementById('page').style.animationFillMode = "forwards";

    createTable();
});