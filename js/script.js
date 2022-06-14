window.onload = function () {

	//instrucciones para jugar
	swal({
		title: "✨¡JUGUEMOS!✨",
		text: "Use las teclas ⬅️, ⬆️, ⬇️, ➡️ para controlar el automóvil, debe elegir hacia que objeto quiere dirigirse ya que representan distintos choques. Presione ACEPTAR para iniciar el juego",
		icon: "success",
		button: "ACEPTAR",
	  });

	//toma el ancho del div
	var w = this.document.documentElement.clientWidth;
	//variable del auto
	var auto = document.getElementById('auto');
	//variables obstaculos
  	var obs1 = document.getElementById("obstaculo1");
	var obs2 = document.getElementById("obstaculo2");
	//variables de posiciones
	var x = 0;
	var y = 0;
  	var pos1 = 0;
	var pos2 = 0;
	var id1 = null;
	var id2 = null;
  	clearInterval(id1);
	clearInterval(id2);
  	id1 = setInterval(frame1, 4);
	id2 = setInterval(frame2, 4);

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
			y = y + 190;                               
			auto.style.top = (-y) + 'px';
		}

		//flecha abajo
		if(event.keyCode == '40'){
			y = y - 190;                            
			auto.style.top = (-y) + 'px';
		}

	}

	window.onkeyup = movimiento;

	//movimiento automatico de los obstaculos

  	function frame1() {
		//hacer que el objeto se mueva solo hasta la mitad de la pantalla
    	if (pos1 == w/2.5) {
      		clearInterval(id1);
    	} else {
			pos1++; 
			obs1.style.right = pos1 + 'px';
    	}
 	 }

	function frame2() {
		//hacer que el objeto se mueva solo hasta la mitad de la pantalla
    	if (pos2 == w/2.5) {
      		clearInterval(id2);
    	} else {
      		pos2++; 
      		obs2.style.right = pos2 + 'px'; 
    	}
 	 }

} 