/*
* YULIANA GARCIA GUTIERREZ 
*
*/

/*Esta funcion es para obtener los identificadores de los elementos*/

// Limpiar cajas 

function limpiarCajasContacto(){
   document.getElementById("name").value = "";
   document.getElementById("correo").value = "";
   document.getElementById("tel").value = "";
   document.getElementById("puesto").value = "";
   document.getElementById("empresa").value = "";
   document.getElementById("sms").value = "";
}

function enviar_ajax(){ 

  $.ajax({
  type: 'POST',
  url: 'formularioEnvio.php',
  data: $('#form1').serialize(),
  success: function(respuesta) {
    if(respuesta=='ok'){
    alert('enviado');
    }
    else {
    alert('error');
    }
  }
  });
}


function formContacto(){ 

  $.ajax({
  type: 'POST',
  url: 'formularioContacto.php',
  data: $('#formContacto').serialize(),
  success: function(respuesta) {
    if(respuesta=='ok'){
    alert('enviado');
      limpiarCajasContacto();
    }
    else {
    alert('error');
    }
  }
  });
}
