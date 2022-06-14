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

//toma el valor de ancho del fondo
var fondo = this.document.getElementById('fondo');
var w = this.document.documentElement.clientWidth;

var id1 = null;
var id2 = null;
var id3 = null;
window.onload = function () {
	alert('Use las teclas ⍇, ⍐, ⍗, ⍈ para controlar el automóvil y moverse hacia arriba y abajo. Presione aceptar para iniciar el juego');

  	var elem1 = document.getElementById("obstaculo1");
	var elem2 = document.getElementById("obstaculo2");
  	var elem3 = document.getElementById("obstaculo3");
  	var pos1 = 0;
	var pos2 = 0;
	var pos3 = 0;
  	clearInterval(id1);
	clearInterval(id2);
	clearInterval(id3);
  	id1 = setInterval(frame1, 5);
	id2 = setInterval(frame2, 3);
	id3 = setInterval(frame3, 6);

  	function frame1() {
    	if (pos1 == w) {
      		clearInterval(id1);
    	} else {
      		pos1++; 
      		elem1.style.right = pos1 + 'px';
    	}
 	 }

	function frame2() {
    	if (pos2 == w) {
      		clearInterval(id2);
    	} else {
      		pos2++; 
      		elem2.style.right = pos2 + 'px'; 
    	}
 	 }

	  function frame3() {
    	if (pos3 == w) {
      		clearInterval(id3);
    	} else {
      		pos3++; 
      		elem3.style.right = pos3 + 'px';
    	}
 	 }
}