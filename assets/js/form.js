const btn = document.getElementById('button');
const name = document.getElementById('from_name')
const email = document.getElementById('emial_id')
const servicio = document.getElementById('service')
const mensaje = document.getElementById('message')

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_fjgn92c';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        
      btn.value = 'Enviar';
      swal("Se ah enviado correctamente!", " " , "success");
      name.value = "";
      email.value = "";
      servicio.value = "";
      mensaje.value = "";
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
      swal ( "Oops" ,  "Algo salio mal!" ,  "error" )
    });
});