window.onload = function () {
    //instrucciones para jugar
    alert('Use las teclas ⍇, ⍐, ⍗, ⍈ para controlar el automóvil y moverse hacia arriba y abajo. Presione aceptar para iniciar el juego');
}

let x = 0;
let y = 0;
let xMax = 0;
let yMax = 0;
//variable del auto
let auto = document.getElementById('auto');

//definimos funciones de movimiento mediante las flechas en el teclado
function movimiento(event){
    //flecha derecha
	if(event.keyCode == '39'){
		x= x + 100;
		auto.style.left = x + 'px';
	}

    //flecha izquierda
	if(event.keyCode == '37'){
		x= x - 100;
		auto.style.left = x +'px';	
	}
	
    //flecha arriba
	if(event.keyCode == '38'){
		y = y + 100;                               
		auto.style.top = (-y) + 'px';
	}

    //flecha abajo
	if(event.keyCode == '40'){
		y = y - 100;                            
		auto.style.top = (-y) + 'px';
	}

}

window.onkeyup = movimiento;