var countnum = 1;
    document.getElementById("display").innerHTML=countnum;

function decrease(){
    countnum--;
    document.getElementById("display").innerHTML=countnum;
    document.getElementById("btndec").addEventListener("click", decreaseColor);
}
function reset(){
    countrst=0;
    document.getElementById("display").innerHTML=countrst;
    document.getElementById("btnrst").addEventListener("click", resetColor);
}
function increase(){
    countnum++;
    document.getElementById("display").innerHTML=countnum;
    document.getElementById("btninc").addEventListener("click", increaseColor);
}

function decreaseColor(){
    document.getElementById("display").setAttribute("style", "color:red");
    }

function resetColor(){
    document.getElementById("display").setAttribute("style", "color:black");
}

function increaseColor(){
    document.getElementById("display").setAttribute("style", "color:green");
}
