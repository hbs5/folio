$(window).on('load', function () {
	AOS.refresh();
	AOS.init({
		duration: 1200,
	});
	
	var nomes = ['Alice', 'Miguel', 'Sophia', 'Arthur', 'Helena', 'Bernardo', 'Valentina', 'Heitor', 'Laura', 'Davi', 'Isabella', 'Lorenzo', 'Manuela', 'ThÃ©o', 'JÃºlia', 'Pedro', 'HeloÃ­sa', 'Gabriel', 'Luiza', 'Enzo', 'Maria Luiza', 'Matheus', 'Lorena', 'Lucas', 'LÃ­via', 'Benjamin', 'Giovanna', 'Nicolas', 'Maria Eduarda', 'Guilherme', 'Beatriz', 'Rafael', 'Maria Clara', 'Joaquim', 'CecÃ­lia', 'Samuel', 'EloÃ¡', 'Enzo Gabriel', 'Lara', 'JoÃ£o Miguel', 'Maria JÃºlia', 'Henrique', 'Isadora', 'Gustavo', 'Mariana', 'Murilo', 'Emanuelly', 'Pedro Henrique', 'Ana JÃºlia', 'Pietro', 'Ana Luiza', 'Lucca', 'Ana Clara', 'Felipe', 'Melissa', 'JoÃ£o Pedro', 'Yasmin', 'Isaac', 'Maria Alice', 'BenÃ­cio', 'Isabelly', 'Daniel', 'LavÃ­nia', 'Anthony', 'Esther', 'Leonardo', 'Sarah', 'Davi Lucca', 'Elisa', 'Bryan', 'Antonella', 'Eduardo', 'Rafaela', 'JoÃ£o Lucas', 'Maria CecÃ­lia', 'Victor', 'Liz', 'JoÃ£o', 'Marina', 'CauÃ£', 'Nicole', 'AntÃ´nio', 'MaitÃª', 'Vicente', 'Isis', 'Caleb', 'AlÃ­cia', 'Gael', 'Luna', 'Bento', 'Rebeca', 'Caio', 'Agatha', 'Emanuel', 'LetÃ­cia', 'VinÃ­cius', 'Maria-', 'JoÃ£o Guilherme', 'Gabriela', 'Davi Lucas', 'Ana Laura', 'Noah', 'Catarina', 'JoÃ£o Gabriel', 'Clara', 'JoÃ£o Victor', 'Ana Beatriz', 'Luiz Miguel', 'VitÃ³ria', 'Francisco', 'OlÃ­via', 'Kaique', 'Maria Fernanda', 'OtÃ¡vio', 'Emilly', 'Augusto', 'Maria Valentina', 'Levi', 'Milena', 'Yuri', 'Maria Helena', 'Enrico', 'Bianca', 'Thiago', 'Larissa', 'Ian', 'Mirella', 'Victor Hugo', 'Maria Flor', 'Thomas', 'Allana', 'Henry', 'Ana Sophia', 'Luiz Felipe', 'Clarice', 'Ryan', 'Pietra', 'Arthur Miguel', 'Maria VitÃ³ria', 'Davi Luiz', 'Maya', 'Nathan', 'LaÃ­s', 'Pedro Lucas', 'Ayla', 'Davi Miguel', 'Ana LÃ­via', 'Raul', 'Eduarda', 'Pedro Miguel', 'Mariah', 'Luiz Henrique', 'Stella', 'Luan', 'Ana', 'Erick', 'Gabrielly', 'Martin', 'Sophie', 'Bruno', 'Carolina', 'Rodrigo', 'Maria Laura', 'Luiz Gustavo', 'Maria HeloÃ­sa', 'Arthur Gabriel', 'Maria Sophia', 'Breno', 'Fernanda', 'KauÃª', 'Malu', 'Enzo Miguel', 'Analu', 'Fernando', 'Amanda', 'Arthur Henrique', 'Aurora', 'Luiz OtÃ¡vio', 'Maria Isis', 'Carlos Eduardo',
    'Louise', 'TomÃ¡s', 'Heloise', 'Lucas Gabriel', 'Ana VitÃ³ria', 'AndrÃ©', 'Ana CecÃ­lia', 'JosÃ©', 'Ana Liz', 'Yago', 'Joana', 'Danilo', 'Luana', 'Anthony Gabriel', 'AntÃ´nia', 'Ruan', 'Isabel', 'Miguel Henrique', 'Bruna', 'Oliver'];
	var planos = ['MENSAL', 'TRIMESTRAL', 'ANUAL'];

	function funcaoNotificacao() {
		$.notify(nomes[Math.floor(Math.random() * nomes.length)] + " adquiriu o Plano " + planos[Math.floor(Math.random() * planos.length)] + " hÃ¡ " + Math.floor(Math.random() * (60 - 1) + 1) + " minutos atrÃ¡s", {
			position: "bottom left"
		});
		setTimeout(funcaoNotificacao, 15000);
	}

	funcaoNotificacao();

});

$(document).ready(function() {
    $('.panel-collapse').on('show.bs.collapse', function () {
		$(this).siblings('.panel-heading').addClass('active');
	});

	$('.panel-collapse').on('hide.bs.collapse', function () {
		$(this).siblings('.panel-heading').removeClass('active');
	});
});
