let line = 1;

let ans = [1, 3, 2, 4];

document.getElementById('submit').addEventListener("click", function() {
    let inp = [0,0,0,0];
    inp[0] = document.getElementById(`$val{line}1`).value;
    inp[1] = document.getElementById(`$val{line}2`).value;
    inp[2] = document.getElementById(`$val{line}3`).value;
    inp[3] = document.getElementById(`$val{line}4`).value;

    let r = 0, w = 0;
    for(let i = 0; i < 4; i++) {
        let change = 0;
        for(let j = 0; j < 4; j++) {
            if(inp[i] == ans[j]) {
                r+=1;
                change = 1;
            }
        }
        if(change == 0) {
            w+=1;
        }
    }

    line++;
    console.log("acertos:", r, " erros:", w);
    changeActivation();
});

function changeActivation() {
    for(let i = 1; i <= 8; i++) {
        if(i == line) {
            document.getElementById(`$val{line}1`).disable = false;
            document.getElementById(`$val{line}2`).disable = false;
            document.getElementById(`$val{line}3`).disable = false;
            document.getElementById(`$val{line}4`).disable = false;
            continue;
        }
        
        document.getElementById(`$val{line}1`).disable = true;
        document.getElementById(`$val{line}2`).disable = true;
        document.getElementById(`$val{line}3`).disable = true;
        document.getElementById(`$val{line}4`).disable = true;
    }
};