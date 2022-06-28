window.onload = function () {

	//instrucciones para jugar
	swal({
		title: "✨¡JUGUEMOS!✨",
		text: "Use las teclas ⬆️, ⬇️ para controlar el automóvil, debe elegir hacia que objeto quiere dirigirse ya que representan distintos choques. Presione ACEPTAR para iniciar el juego",
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
  	id1 = setInterval(frame1, 6);
	id2 = setInterval(frame2, 6);

	//definimos funciones de movimiento mediante las flechas en el teclado
	function movimiento(event){
		
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
    	if (pos1 == w/1.5) {
      		clearInterval(id1);
			choque1();
    	} else {
			pos1++; 
			obs1.style.right = pos1 + 'px';
    	}

 	 }

	function frame2() {
    	if (pos2 == w/1.5) {
      		clearInterval(id2);
			choque2();
    	} else {
      		pos2++; 
      		obs2.style.right = pos2 + 'px'; 
    	}

	}

	function choque1() {
		//choque contra la bola
		if (y>=0) {
			window.open("./choqueElastico.html", "_self");
		}
	}

	function choque2() {
		//choque contra la pared
		if (y<0) {
			window.open("./choqueInelastico.html", "_self");
		}
	}

} 
