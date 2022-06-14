function validate(){
  var user = document.getElementById("nombre").value;

  if(user == ''){
    swal({
      title: "😭",
      text: "Ingresa tu nombre para poder jugar :)",
      icon: "error",
      button: "OK",
      });
  }else{
    window.open("./juego.html", "_self");
  }
}