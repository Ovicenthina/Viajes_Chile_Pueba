$(document).ready(function() {
    //Función de Bootstrap para Tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    
    //Función para que en un intervalo de 5000' se cambie la foto del carrousel
    $('#carouselExampleAutoplaying').carousel({
        interval: 5000
    });

    //Función con el evento click para generar un smooth scroll
    $("a").on('click', function(event) {
      
        if (this.hash !== "") {
          event.preventDefault();
    
          var hash = this.hash;
    
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            window.location.hash = hash;
          });
        } 
      });

    //Función para generar un alert al presionar enviar y limpiar los campos del formulario
    $("#formulario").submit (function(event){
        event.preventDefault();

        alert("El mensaje fue enviado correctamente")

        //Limpia los campos del formulario
        $("#nombre").val('');
        $("#asunto").val('');
        $("#mensaje").val('');
    });

    });

