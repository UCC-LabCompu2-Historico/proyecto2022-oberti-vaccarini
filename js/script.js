window.onload = function () {

	//instrucciones para jugar
	swal({
		title: "✨¡JUGUEMOS!✨",
		text: "Use las teclas ⬅️, ⬆️, ⬇️, ➡️ para controlar el automóvil y moverse hacia arriba y abajo, elija hacia que objeto quiere dirigirse. Presione ACEPTAR para iniciar el juego",
		icon: "success",
		button: "ACEPTAR",
	  });

	var x = 0;
	var y = 0;

	//variable del auto
	var auto = document.getElementById('auto');

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

	//colision con objetos
	
}