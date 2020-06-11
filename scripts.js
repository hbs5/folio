$(window).on('load', function () {
	AOS.refresh();
	AOS.init({
		duration: 1200,
	});
	
	var nomes = ['Maria', 'José', 'Antônio', 'João', 'Francisco', 'Ana', 'Luiz', 'Paulo', 'Carlos', 'Manoel',
				'Pedro', 'Francisca', 'Marcos', 'Raimundo', 'Sebastião', 'Antônia', 'Marcelo', 'Jorge', 'Márcia', 'Geraldo',
				'Adriana', 'Sandra', 'Luis', 'Fernando', 'Fabio', 'Roberto', 'Márcio', 'Edson', 'André', 'Sérgio',
				'Josefa', 'Patrícia', 'Daniel', 'Rodrigo', 'Rafael', 'Joaquim', 'Vera', 'Ricardo', 'Eduardo', 'Terezinha',
				'Sônia', 'Alexandre', 'Rita', 'Luciana', 'Cláudio', 'Rosa', 'Benedito', 'Leandro', 'Raimunda', 'Mário'];
	var planos_array = ['MENSAL', 'TRIMESTRAL', 'SEMESTRAL'];
	var msgs_array = ['o PLANO ' + planos_array[Math.floor(Math.random() * planos_array.length)]]

	function funcaoNotificacao() {
		$.notify(nomes[Math.floor(Math.random() * nomes.length)] + " adquiriu " + msgs_array[Math.floor(Math.random() * msgs_array.length)]  + " há " + Math.floor(Math.random() * (60 - 1) + 1) + " minutos atrás", {
			position: "bottom left"
		});
		setTimeout(funcaoNotificacao, 15000);
	}

	funcaoNotificacao();

});

$(document).ready(function() {
	
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
			$('html, body').animate({
				scrollTop: (target.offset().top - 54)
			}, 1000, "easeInOutExpo");
			return false;
			}
		}
	});

	$('.js-scroll-trigger').click(function() {
		$('.navbar-collapse').collapse('hide');
	});

	$('body').scrollspy({
		target: '#mainNav',
		offset: 56
	});

	var navbarCollapse = function() {
		if ($("#mainNav").offset().top > 100) {
			$("#mainNav").addClass("navbar-shrink");
		} else {
			$("#mainNav").removeClass("navbar-shrink");
		}
	};
	
	navbarCollapse();
	

	$(window).scroll(navbarCollapse);
});

