document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  
function verify(id) {
    let valor = document.getElementById(id).value;

    //Valor vacío
    if (valor === "") {
        alert("Llene los campos requeridos");
        
        return false;

    }
}

/*
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if(usuario.length == 0) {
      alert('Por favor, ingresa tu nombre para poder continuar');
      return;
    }

    this.submit();
}*/
