<?php
if ( $_POST && !empty( $_POST['mensagem'] ) && !empty( $_POST['nome'] ) && !empty( $_POST['email'] ) ) {
	
	require_once ( $_SERVER['DOCUMENT_ROOT'].'/classes/phpmailer/class.phpmailer.php' );

	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$telefone = !empty( $_POST['telefone'] ) ? $_POST['telefone'] : '-';
	$mensagem = $_POST['mensagem'];

	$assunto = utf8_decode('Contato Enviado Através do Site');
	$tpl = file_get_contents('templates/template.email.sf.html');
	$tpl = str_replace('[#data#]', date("d/m/Y"), $tpl);
	$tpl = str_replace('[#hora#]', date("H:i"), $tpl);
	$tpl = str_replace('[#nome#]', $nome , $tpl);
	$tpl = str_replace('[#email#]', $email , $tpl);
	$tpl = str_replace('[#telefone#]', $telefone , $tpl);
	$linhas = array("<br />","<br>","<br/>");
	$tpl = str_replace($linhas, "\n", $tpl);
	$mensagem = str_replace("\n", nl2br("\n"), utf8_decode( $mensagem ));
	$tpl = str_replace('[#mensagem#]', $mensagem, $tpl);
	$mensagem = $tpl;
	$mensagem = html_entity_decode($mensagem);


	$mailer = new PHPMailer();
	$mailer->IsSMTP();
	$mailer->SMTPDebug = 1;
	$mailer->Port = 587; //Indica a porta de conexão para a saída de e-mails. Utilize obrigatoriamente a porta 587.

	$mailer->Host = 'smtp.gabrieluizramos.com.br'; //Onde em 'servidor_de_saida' deve ser alterado por um dos hosts abaixo:
	//Para cPanel: 'mail.dominio.com.br';
	//Para Plesk 11 / 11.5: 'smtp.dominio.com.br';

	//Descomente a linha abaixo caso revenda seja 'Plesk 11.5 Linux'
	//$mailer->SMTPSecure = 'tls';

	$mailer->SMTPAuth = true; //Define se haverá ou não autenticação no SMTP
	$mailer->Username = 'contato@gabrieluizramos.com.br'; //Informe o e-mai o completo
	$mailer->Password = 'c()nt@t3t!54A'; //Senha da caixa postal
	$mailer->FromName = 'Gabriel Ramos'; //Nome que será exibido para o destinatário
	$mailer->From = 'contato@gabrieluizramos.com.br'; //Obrigatório ser a mesma caixa postal indicada em "username"
	$mailer->AddAddress('gabriel.luiz.ramos@gmail.com'); //Destinatário
	$mailer->isHTML(true);   
	$mailer->Subject = $assunto;
	$mailer->Body    = $mensagem;

	if( $mailer->Send() ){
		echo 1;
	}
	else{
		echo 0;
	}
}
else{
	echo 0;
}
?>