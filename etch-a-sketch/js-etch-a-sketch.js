// Generates (x,y) grid of divs then removes button with css effects.

function generateDivGrid(x,y){
    for (i = 0; i < x; i++){
        let column = document.createElement("div");
        column.classList.add("column");
        for (j = 0; j < y; j++){
            let cell = document.createElement("div");
            cell.classList.add("gridsquare","notHovered");
            cell.setAttribute("onmouseover", "changeColour(this)");
            cell.setAttribute("id",i*x+j);
            column.appendChild(cell);
        }
        document.getElementById("container").appendChild(column)
    }
    function removeButton(){
        document.getElementById('button').remove();
    }
    setTimeout(removeButton, 500);
}

function changeColour(x){
    document.getElementById(x.id).classList.replace("notHovered","hovered");
    }