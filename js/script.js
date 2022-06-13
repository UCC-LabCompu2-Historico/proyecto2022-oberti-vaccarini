let auto = document.getElementById("auto");
let velocidad = 50;
let mTop = 0;

document.addEventListener("keydown"); {
    function e(){
    if (e.keyCode == "38"){
        moverArriba();
    }
    if (e.keyCode == "40"){
        moverAbajo();
    }
    }
}


function moverArriba(){
    mTop -= velocidad ;
    auto.marginTop = mTop + "px" ;
}

function moverAbajo(){
    mTop += velocidad ;
    auto.marginTop = mTop + "px" ; 
}