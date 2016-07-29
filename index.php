<!DOCTYPE html>
<html>
<head>
    <!-- META -->
    <!-- DEFAULT -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Cache-Control: max-age=3600, must-revalidate"/>
    <!-- /META -->
	<title>Gabriel Ramos » Desenvolvedor Web</title>
	<!-- CSS -->
	<link rel="stylesheet" href="/assets/dist/css/style.css" type="text/css" />
	<!-- FONT-AWESOME -->
	<link rel="stylesheet" href="/assets/dist/css/font-awesome/css/font-awesome.min.css" type="text/css" />
</head>
<body class="body">
    <header class="header clearfix">
        <h1 class="page-title">Gabriel / Ramos</h1>
        <h2 class="page-subtitle"><i class="fa fa-angle-left" aria-hidden="true"></i> Desenvolvedor Web <i class="fa fa-angle-right" aria-hidden="true"></i></h2>
        <a data-scroll="about"><i class="fa fa-angle-double-down" aria-hidden="true"></i></a>
    </header>
    <section class="section clearfix" data-anchor="about">
        <ul class="widget-list">
            <li class="widget-item">
                <div class="front">
                  <i class="fa fa-question title" aria-hidden="true"></i>
                </div>
                <div class="back">
                     <span class="title">sobre</span>
                     <p class="text">Olá! Meu nome é Gabriel Ramos, atuo como Desenvolvedor Web e posso te ajudar caso queira inserir sua marca na web.</p>
                </div>
            </li>
            <li class="widget-item">
                <div class="front">
                    <i class="fa fa-briefcase title" aria-hidden="true"></i>
                </div>
                <div class="back">
                     <span class="title">trajetória</span>
                     <p class="text">
                         Técnico em informática formado pelo IFSP e graduando em Análise e Desenvolvimento de Sistemas pela FATEC Rubens Lara.
                        </p>
                </div>
            </li>
            <li class="widget-item">
                <div class="front">
                    <i class="fa fa-code title" aria-hidden="true"></i>
                </div>
                <div class="back">
                    <span class="title">métodos</span>
                     <p class="text">
                         Utilização de HTML, CSS (pré-processado pelo SASS) e JavaScript (com ou sem jQuery, sempre tentando aplicar melhores práticas de modularização) para desenvolvimento Front-end. PHP e MySQL para desenvolvimento Back-end. Gulp para assistência em meus "assets" e Git para versionar todo e qualquer conteúdo.
                    </p>
                </div>
            </li>
            <li class="widget-item">
                <div class="front">
                  <i class="fa fa-bolt title" aria-hidden="true"></i>
                </div>
                <div class="back">
                     <span class="title">conceito</span>
                     <p class="text">
                         Sempre prezando por um código limpo e semântico para poder proporcionar a melhor experiência dentro de um projeto. <br>
                         Entusiasta com aplicações modulares e escaláveis, estudando constantemente sobre toda a arquitetura MEAN (MongoDB, Express, AngularJS e NodeJS) e todas as novidades que ocorrem no universo do desenvolvimento. Viso entregar produtos de qualidade e com tecnologias de ponta.
                     </p>
                </div>
            </li>
            <li class="widget-item">
                <div class="front">
                    <i class="fa fa-coffee title" aria-hidden="true"></i>
                </div>
                <div class="back">
                     <span class="title">mais</span>
                     <p class="text">Se quiser me encontrar em algumas outras redes sociais, ver meu portfólio ou saber um pouco mais, é só seguir!</p>
                     <ul class="social-list">
                         <li class="social-item"><a href="https://www.behance.net/gabrieluizramos" class="social-link fa fa-behance-square" target="_blank"></a></li>
                         <li class="social-item"><a href="http://github.com/gabrieluizramos/" class="social-link fa  fa-github" target="_blank"></a></li>
                         <li class="social-item"><a href="https://br.linkedin.com/in/gabrieluizramos" class="social-link fa fa-linkedin-square" target="_blank"></a></li>
                         <li class="social-item"><a href="https://www.facebook.com/gabreeu.ramos" class="social-link fa fa-facebook-official" target="_blank"></a></li>
                         <li class="social-item"><a href="http://instagram.com/gabrieluizramos" class="social-link fa fa-instagram" target="_blank"></a></li>
                     </ul>
                </div>
            </li>
            <li class="widget-item">
                <div class="front">
                    <i class="fa fa-envelope title" aria-hidden="true"></i>
                </div>
                <div class="back">
                     <span class="title">contato</span>
                     <p class="text">
                         (13) 9 8171-6208 <br>
                         gabriel.luiz.ramos@gmail.com <br>
                        
                    </p>
                     <a class="btn-email" data-modal="button">mande uma mensagem!</a>
                </div>
            </li>
        </ul>
        <div data-modal="panel">
			<div data-modal="outer"></div>
			<div data-modal="content">
				<span data-modal="close"><i class="fa fa-times" aria-hidden="true"></i></span>
				<form class="form">
				   <div class="linha">
				       <fieldset class="fieldset fd-100">
				           <input type="text" class="input" placeholder="Seu nome">
				       </fieldset>
				   </div>
				   <div class="linha">
				       <fieldset class="fieldset fd-50">
				           <input type="email" class="input" placeholder="Seu e-mail">
				       </fieldset>
				        <fieldset class="fieldset fd-50">
				           <input type="email" class="input" placeholder="Seu telefone ?">
				       </fieldset>
				   </div>
				   <div class="linha">
				       <fieldset class="fieldset fd-100">
				           <textarea name="" id="" cols="30" rows="10" class="input" placeholder="Conte-me: no que eu posso ajudar?"></textarea>
				       </fieldset>
				   </div>
				   <div class="linha">
				       <fieldset class="fieldset fd-100">
				           <button class="btn-push"><i class="fa fa-paper-plane"></i></button>
				       </fieldset>
				   </div>
				</form>
			</div>
	    </div>
    </section>
    <footer class="footer">
        gabrieluizramos - todos os direitos reservados
    </footer>
    <!-- JQUERY -->
    <script type="text/javascript" src="/assets/dist/js/jquery.min.js"></script>
    <!-- PLUGINS -->
    <script type="text/javascript" src="/assets/dist/js/plugins/extended/plugins.extended.es6.js"></script>
    <script>
        var modal = new Modal( 'click' , '[data-modal="button"]' , '[data-modal="panel"]' );
        $(function() {
			$('[data-scroll]').click(function( e ){
				e.preventDefault();
				$('html, body').stop().animate({
					scrollTop: $('[data-anchor="'+ $( this ).attr( 'data-scroll' ) +'"]').offset().top
				}, 1000 );
				return false;
			});
		});
    </script>
</body>
</html>