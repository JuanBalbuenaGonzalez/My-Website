$(document).ready(function(){

	var message = $("#message");
	var name = $("#name");
	var email = $("#email");

	var menu = $('#menu');
  	var contenedor = $('#menu-contenedor');
  	var menu_offset = menu.offset();

  	$(window).on('scroll', function() {
    	if($(window).scrollTop() > menu_offset.top) {
     		 menu.addClass('menu-fijo');
    	} else {
      		menu.removeClass('menu-fijo');
    	}
  	});

	$('#skills').click(function() {
		$('#trabajo').animatescroll({scrollSpeed:'1000',easing:'easeInOutCubic'});
	});

	$('#proyecto').click(function() {
		$('#proyectos').animatescroll({scrollSpeed:'1000',easing:'easeInOutCubic'});
	});

	$('#contact').click(function() {
		$('#contacto').animatescroll({scrollSpeed:'1000',easing:'easeInOutCubic'});
	});

	$('#education').click(function() {
		$('#formacion').animatescroll({scrollSpeed:'1000',easing:'easeInOutCubic'});
	});

	$('form').submit(function() {
		$('input[type=submit]').attr('disabled', 'true');
	});//FIN DE ENVIO 1 SOLA VEZ

	$('form').submit(function() {
		var boton = $(this).find(':submit');
		boton.attr('disabled', 'true');
		boton.val('Enviando');

	});// FIN DE CAMBIO DE TEXTO BOTON

	message.on("focusout", function(){
		if($(this).val() == ""){
			message.css({"background": "#FFCECF",
				"border": "2px solid #FF726C"});
			for(var i = 0; i < message.length; i++){
				$(".ok1").remove();
				$(".cancel1").remove();
				message.after('<img class="cancel1" src="img/redes/cancel.png" width="28" height="28">');
				message.attr("placeholder", "Debes escribir un mensaje");
			}
		}
		else{
			message.css({"background": "#C8FDD4",
				"border": "2px solid #52FD8B"});

			for(var i = 0; i < message.length; i++){
				$(".cancel1").remove();
				$(".ok1").remove();
				message.after('<img class="ok1" src="img/redes/check.png" width="28" height="28">');
			}
		}
	});
	email.on("focusout", function(){
		if($(this).val() == "" || $("#email").val().indexOf("@") == -1 || $("#email").val().indexOf(".") == -1){
			email.css({"background": "#FFCECF",
				"border": "2px solid #FF726C"});

			for(var i = 0; i < email.length; i++){
				$(".ok2").remove();
				$(".cancel2").remove();
				email.after('<img class="cancel2" src="img/redes/cancel.png" width="28" height="28">');
				email.attr("placeholder", "Debes escribir tu email");
			}

		}
		else{
			email.css({"background": "#C8FDD4",
				"border": "2px solid #52FD8B"});

			for(var i = 0; i < email.length; i++){
				$(".cancel2").remove();
				$(".ok2").remove();
				email.after('<img class="ok2" src="img/redes/check.png" width="28" height="28">');
			}
		}
	});
	name.on("focusout", function(){
		if($(this).val() == ""){
			name.css({"background": "#FFCECF",
				"border": "2px solid #FF726C"});

			for( var i = 0; i < name.length; i++){
				$(".ok3").remove();
				$(".cancel3").remove();
				name.after('<img class="cancel3" src="img/redes/cancel.png" width="28" height="28">');
				name.attr("placeholder", "Debes escribir tu nombre");
			}
		}
		else{
			name.css({"background": "#C8FDD4",
				"border": "2px solid #52FD8B"});

			for(var i = 0; i < name.length; i++){
				$(".cancel3").remove();
				$(".ok3").remove();
				name.after('<img class="ok3" src="img/redes/check.png" width="28" height="28">');
			}
		}
	});//FIN VALIDACIÓN VISUAL EMAIL


	$("#range").change(function(){
		$("#contador").html( this.value + "€");
	});

	var ids = ["#animacion", "#animacion2", "#animacion3", "#animacion4", "#animacion5", "#animacion6"];

	function cerrarAnimaciones()
	{
		for(var i = 0; i < ids.length; i++)
		{
			$(ids[i]).hide("slow");
		}
	}
		$("#html").click( function(){
			cerrarAnimaciones();
			$(ids[0]).toggle("slow");
		});
		$("#css").click( function(){
			cerrarAnimaciones();
			$(ids[1]).toggle("slow");
		});
		$("#javascript").click(function(){
			cerrarAnimaciones();
			$(ids[2]).toggle("slow");
		});
		$("#stylus").click( function(){
			cerrarAnimaciones();
			$(ids[3]).toggle("slow");
		});
		$("#handlebars").click(function () {
			cerrarAnimaciones();
			$(ids[4]).toggle("slow");
		});
		$("#jquery").click( function(){
			cerrarAnimaciones();
			$(ids[5]).toggle("slow");
		});//FIN DE TOGGLE HABILIDADES

	name.click( function(){
		$("#email").fadeIn(1000);
	});//FIN DE FADEIN FORMULARIO
});//FIN DE READY

