      var gabrieluizramos = {
          config : {
              patterns : {
    			email : /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i ,
        		} ,
        		progress : {} ,
        		url: $( '[data-form]' ).attr( 'action' ) ,
        		data : {}
              } ,
           elements: {
                  willValidate : [ '[data-validate="nome"]' , '[data-validate="email"]' , '[data-validate="mensagem"]' ] ,
                  messager : '[data-message]' ,
                  button : '[data-send]'
            },
          functions: {
              returnValid : function(){
    			for ( campo in gabrieluizramos.elements.willValidate ) {
    				var valor = $( gabrieluizramos.elements.willValidate[ campo ] ).val();
    				var attr = $( gabrieluizramos.elements.willValidate[ campo ] ).attr( 'data-validate' )
    				if ( !valor || ( attr == "email" && !gabrieluizramos.config.patterns.email.test( valor ) ) ) return false;
    				else {
    					gabrieluizramos.config.progress[ attr ] = true;
    					gabrieluizramos.config.data[ attr ] = valor;
    				}
    			}
    			return true;
    		}
          } ,
          actions : {
            callMessage : function( type ){
    			type = parseInt( type );
    			switch( type ){
    				case 0:
    				$( gabrieluizramos.elements.messager ).html( 'Falha ao enviar mensagem. Por favor, tente novamente!' ).attr( 'class' , 'message error' ).show();
    				break;
    				case 1:
    				$( gabrieluizramos.elements.messager ).html( 'Mensagem enviada com sucesso!' ).attr( 'class' , 'message success' ).show();
    				break;
    				case 2:
    				$( gabrieluizramos.elements.messager ).html( 'Enviando mensagem...' ).attr( 'class' , 'message alert' ).show();
    				break;
    				case 3:
    				$( gabrieluizramos.elements.messager ).html( 'Por favor, preencha os dados corretamente' ).attr( 'class' , 'message alert' ).show();
    				break;
    			}
    		} ,
    		eraseMessage : function(){
    			setTimeout( function(){
    				$( gabrieluizramos.elements.messager ).hide( 200 );
    			}, 5000 );
    		}
          } ,
          events : {
              init: function(){
                  $( gabrieluizramos.elements.button ).on( 'click' , function( e ){
    				e.preventDefault();
    				if ( !gabrieluizramos.functions.returnValid() ) {
    					gabrieluizramos.actions.callMessage( 3 );
    				}
    				else{
    					if ( $( '[data-mask="tel"]' ).val() ) {
    						gabrieluizramos.config.data.telefone = $( '[data-mask="tel"]' ).val();
    					}
    					gabrieluizramos.actions.callMessage( 2 );
    					$.post( gabrieluizramos.config.url , gabrieluizramos.config.data , function( dataRES ){
    					 dataRES = parseInt( dataRES );
    						//console.log( dataRES );
    						if ( dataRES ) {
    							gabrieluizramos.actions.callMessage( 1 );
    						}
    						else{
    							gabrieluizramos.actions.callMessage( 0 );
    						}
    					});
    					gabrieluizramos.actions.eraseMessage();						
    				}
    			});
              }
          } ,
          plugins: {
              init: function(){
                $( '[data-mask="tel"]' ).mask( '(99)9?9999-9999' );
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
              }
          } ,
          init: function( options ){
              $.extend( gabrieluizramos.config , options  );
              gabrieluizramos.events.init();
              gabrieluizramos.plugins.init();
          }
            
      }